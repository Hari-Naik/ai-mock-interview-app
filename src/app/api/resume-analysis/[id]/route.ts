import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import ResumeAnalysis from "@/models/resume-analysis";
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const session = await auth();
    const { id } = await params;

    if (!session?.user) {
      return Response.json(
        {
          success: false,
          message: "Unauthorized. Please Login.",
        },
        { status: 401 }
      );
    }

    const data = await ResumeAnalysis.findOne(
      { userId: session.user.id, _id: id },
      { __v: 0 }
    );

    const formattedData = {
      ...data._doc,
      id: data._id.toString(),
    };

    return Response.json(
      {
        success: true,
        data: formattedData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        success: false,
        message: "Failed to fetch data",
      },
      { status: 400 }
    );
  }
}
