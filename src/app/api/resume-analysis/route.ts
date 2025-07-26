import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import ResumeAnalysis from "@/models/resume-analysis";
export async function GET() {
  try {
    await connectDB();
    const session = await auth();

    if (!session?.user) {
      return Response.json(
        {
          success: false,
          message: "Unauthorized. Please Login.",
        },
        { status: 401 }
      );
    }
    const data = await ResumeAnalysis.find(
      { userId: session.user.id },
      { __v: 0 }
    ).sort({ createdAt: -1 });

    const formattedData = data.map(item => ({
      id: item._id.toString(),
      userId: item.userId.toString(),
      ...item._doc,
    }));

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
