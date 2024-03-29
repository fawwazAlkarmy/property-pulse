import prisma from "@/utils/db";
import { NextResponse } from "next/server";

//! GET /api/properties

export const GET = async () => {
  try {
    const properties = await prisma.property.findMany();
    if (properties.length === 0) {
      return NextResponse.json(
        { message: "No properties found" },
        { status: 404 }
      );
    }
    return NextResponse.json(properties, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Error fetching properties" },
      { status: 500 }
    );
  }
};
