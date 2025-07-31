import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-12">
      <section className="max-w-4xl mx-auto grid gap-8">
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Chris Teal</h1>
          <p className="text-xl text-gray-600">Cloud & Cybersecurity Professional</p>
        </header>

        <Card className="shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p className="text-gray-700">
              I'm a cloud and cybersecurity specialist with a B.S. in Computer Information Systems and a CompTIA Security+ certification. Currently expanding my expertise with Azure and AWS certifications.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>CompTIA Security+</li>
              <li>Microsoft Azure Fundamentals (AZ-900)</li>
              <li>Microsoft Azure Administrator (AZ-104)</li>
              <li>AWS Certified Solutions Architect - Associate (SAA-C03)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardContent className="p-6 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Connect with Me</h2>
            <div className="flex gap-4">
              <Button variant="outline" asChild>
                <a
                  href="https://www.linkedin.com/in/your-linkedin-url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/your-github-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github size={18} /> GitHub
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
