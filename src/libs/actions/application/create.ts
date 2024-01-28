"use server";

import prisma from "@/libs/prisma/prisma";
// import { z } from "zod";
import { redirect } from "next/navigation";

export const Create = async () => {
  try {
    await prisma.application.create({
      data: {
        companyName: "hoge",
        status: null,
        aspirationLevel: null,
        applicationRoute: "",
        workLocation: "",
        estimatedIncome: null,
        companyDetail: "",
        contactEmail: "",
        contactPhoneNumber: "",
      },
    });
  } catch (error) {
    console.log("登録に失敗しました");
  }
  redirect("/application");
};
