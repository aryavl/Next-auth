"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Header from "./header";
import Social from "./social";
import Link from "next/link";
import Image from "next/image";
import BackButton from "./back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  title:string
  
}

const CardWrapper = ({
  
  children,
  headerLabel,
  title
  
}: CardWrapperProps) => {
  return (
    <>
      <Card className=" w-[80%]  m-auto mt-20 mb-20 shadow-md">
        <CardHeader >
        <Header headerTitle={title} label={headerLabel}/>
        </CardHeader>
        <CardContent>
       
        {children}
        </CardContent>
        
       
        </Card>
    </>
  );
};

export default CardWrapper;
