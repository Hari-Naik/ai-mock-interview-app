import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import User from "@/models/user";
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

    const user = await User.findById(session.user.id).select("-password -__v");

    if (!user) {
      return Response.json(
        {
          sucess: false,
          message: "User not found.",
        },
        { status: 404 }
      );
    }

    const formattedData = {
      id: user?._id.toString(),
      ...user.toObject(),
    };
    return Response.json(
      {
        success: true,
        data: formattedData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error while getting user: ", error);
    return Response.json(
      {
        success: false,
        message: "Something went wrong. Could not fetch user.",
      },
      { status: 500 }
    );
  }
}
