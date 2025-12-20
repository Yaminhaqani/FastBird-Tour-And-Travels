import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { contactSchema, type ContactFormData } from "@/schema/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { motion } from "motion/react";
import { SendButton } from "@/components/ui/sendButton";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = () => {
    // Netlify handles submission automatically
    // No fetch, no JS submit needed
  };

  return (
    <section className=" w-full flex flex-col items-center">
      <div
        className="relative w-dvw md:w-[95%] lg:w-[82%] rounded-2xl overflow-hidden mt-4 pb-4 border"
        style={{
          backgroundImage: `url(/heroImages/glass2.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          boxShadow:
            "0 10px 25px -5px rgba(0,0,0,0.4), 0 8px 10px -6px rgba(0,0,0,0.4)",
        }}
      >
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="relative z10 mt-4 p-2">
          <Form {...form}>
            <form
              name="contact" //→ Netlify form name
              method="POST" //→ enable Netlify Forms
              data-netlify="true" //→ required
              data-netlify-honeypot="bot-field" //→ free spam protection
              onSubmit={form.handleSubmit(onSubmit)} //→ Zod validation first
              className="space-y-4 relative max-w-sm mx-auto backdrop-blur-xs rounded-2xl p-3  border border-white/20 overflow-hidden"
            >
              <div className="absolute top-0 -bottom-5 left-0 right-0 bg-black/20 z-0 pointer-events-none"></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-center"
              >
                <h1 className="text-3xl tracking-tight text-amber-300 font-bold z-50">
                  Contact Us
                </h1>
              </motion.div>

              {/* Mandatory, Without these Netlify will NOT work. */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <FormField //FormField connects React Hook Form → UI
                control={form.control}
                name="name"
                render={(
                  { field } //field contains value, onChange, etc.
                ) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} name="name" />
                    </FormControl>
                    <FormMessage />
                    {/* FormMessage auto-reads Zod errors */}
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" {...field} name="email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Phone Number"
                        {...field}
                        name="phone"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message"
                        {...field}
                        rows={4}
                        name="message"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className=" w-full flex justify-center">
                <SendButton
                  type="submit"
                  className="border border-white/40 bg-white/10 text-amber-300/80 hover:bg-white/10 shadow-2xl shadow-amber-400"
                />
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
