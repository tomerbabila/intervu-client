import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MessageCircle, CalendarCheck } from "lucide-react";

const features = [
  {
    icon: <Briefcase className="w-10 h-10 text-primary" />,
    title: "Real Interview Practice",
    description: "Practice with industry professionals in a real interview setting.",
  },
  {
    icon: <MessageCircle className="w-10 h-10 text-primary" />,
    title: "Personalized Feedback",
    description: "Receive expert insights to improve your interview skills.",
  },
  {
    icon: <CalendarCheck className="w-10 h-10 text-primary" />,
    title: "Flexible Scheduling",
    description: "Book interviews at times that work best for you.",
  },
];

const Features = () => {
  return (
    <section className="py-8 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <Card key={index} className="text-center p-6">
          <CardHeader>
            <div className="flex justify-center">{feature.icon}</div>
            <CardTitle className="mt-4">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">{feature.description}</CardContent>
        </Card>
      ))}
    </section>
  );
};

export default Features;
