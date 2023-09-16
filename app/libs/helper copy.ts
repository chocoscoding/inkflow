// /app/api/users/route.ts

import prisma from "@/app/libs/prismadb";

export async function GET(req: Request) {
  try {
    // get page and newCursor from query
    const url = new URL(req.url);

    const take = url.searchParams.get("take");
    const newCursor = url.searchParams.get("newCursor");

    let result = await prisma.user.findMany({
      take: take ? parseInt(take as string) : 10,
      ...(newCursor && {
        skip: 1, // Do not include the cursor itself in the query result.
        cursor: {
          id: newCursor as string,
        },
      }),
      orderBy: {
        createdAt: "desc",
      },
    });

    if (result.length == 0) {
      return new Response(
        JSON.stringify({
          data: [],
          metaData: {
            newCursor: null,
            hasMore: false,
          },
        }),
        { status: 200 }
      );
    }

    const lastPostInResults: any = result[result.length - 1];
    const cursor: any = lastPostInResults.id;

    const nextPage = await prisma.user.findMany({
      // Same as before, limit the number of events returned by this query.
      take: take ? parseInt(take as string) : 7,
      skip: 1, // Do not include the cursor itself in the query result.
      cursor: {
        id: cursor,
      },
    });

    const data = {
      data: result,
      metaData: {
        newCursor: cursor,
        hasMore: nextPage.length > 0,
      },
    };

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify(JSON.stringify({ error: error.message })), { status: 403 });
  }
}
