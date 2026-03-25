// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

export default function AboutMe() {
  // const [formData, setFormData] = useState<FormData>({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Form submitted: ", formData);
  // };

  return (
    <section id="about-me" className="mb-20">
      <div>
        <div className="grid grid-cols-1 text-sm md:grid-cols-2">
          {/* About Section */}
          <div className="space-y-10 p-8 max-w-2xl">
            <div>
              <h2 className="font-semibold text-lg text-stone-900 mb-4">
                About Me
              </h2>
              <p className="leading-tight">
                Brooklyn-based software engineer with too many interests and a
                habit of going deep on whatever has my attention lately. Drawn
                to work that makes technology feel more human than complicated.
                Always on my toes; a curious explorer with many pursuits.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <div>
                <a
                  href="mailto:matthew.jsalvador@gmail.com"
                  className="leading-tight"
                >
                  matthew.jsalvador@gmail.com
                </a>
              </div>
              <div>
                <a href="tel:+19176640131" className="leading-tight">
                  (917) 664-0131
                </a>
              </div>
              <p className="leading-tight">Brooklyn, NY</p>
            </div>

            <div>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline leading-tight"
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="space-y-10 p-8 max-w-3xl">
            <h2 className="font-semibold text-lg mb-4">Let's Get In Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 leading-tight"
                >
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="px-4 py-2 leading-tight"
                />
              </div>


              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 leading-tight"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="text"
                  name="email"
                  required
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-2 leading-tight"
                />
              </div>


              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 leading-tight"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="px-4 py-2 leading-tight"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full mt-4 bg-stone-900 text-gray-200 leading-tight"
              >
                Send Message
              </Button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
}
