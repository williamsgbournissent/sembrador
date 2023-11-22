// import User from "@/models/user";
// import { NextResponse } from "next/server";

// export async function PUT(req: Request, { params }) {
//   try {
//     const { id } = params;
//     const body = await req.json();
//     const userData = body.formData;

//     const updateUserData = await User.findByIdAndUpdate(id, { ...userData });
//   } catch (error) {
//     return NextResponse.json({ message: "Error", error }, { status: 500 });
//   }
// }
