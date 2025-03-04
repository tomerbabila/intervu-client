import React from "react";
import { Link } from "react-router";
import { buttonVariants } from "@/components/ui/button";

function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Master Your Job Interviews!</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mb-6">
        Get real-world interview practice with industry professionals and receive valuable feedback to improve your
        chances of success.
      </p>
      <div className="flex gap-4">
        <Link to="/mentors" className={buttonVariants({ variant: "default" })}>
          Find a Mentor
        </Link>
        <Link to="/mentors" className={buttonVariants({ variant: "outline" })}>
          Become a Mentor
        </Link>
      </div>
    </section>
  );
}

export default Hero;
