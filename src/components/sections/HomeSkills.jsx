import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionContent,
} from "@/components/Accordion";

const HomeSkills = () => {
  const accordionContent = [
    {
      title: "UI & UX Design",
      description:
        "I create user-friendly and visually appealing interfaces that make every interaction feel natural. By focusing on user needs and seamless navigation, I help brands leave a lasting impression and ensure that users enjoy a smooth, engaging experience every step of the way.",
    },
    {
      title: "Web Design & Development",
      description:
        "I build responsive websites that look stunning on any device and work effortlessly. From layout and design to functionality, I focus on creating sites that are both visually impressive and easy to use, delivering the best experience for users across all screens.",
    },
    {
      title: "CMS Implementation",
      description:
        "I set up and customize content management systems to make content updates straightforward and hassle-free. Whether it’s WordPress, Joomla, or other platforms, I empower clients to manage their sites independently, with clean, flexible structures tailored to their needs.",
    },
    {
      title: "Website Migrations",
      description:
        "I handle website migrations with care, ensuring that everything transfers smoothly with minimal downtime. From retaining SEO rankings to preserving critical data, I make the transition seamless so your users experience a flawless site, even during big changes.",
    },
    {
      title: "Custom Code Development",
      description:
        "I develop custom code solutions that bring unique ideas to life. By tailoring code to meet specific needs, I add features and functionality that make your site stand out and work precisely how you envision, without unnecessary limitations.",
    },
    {
      title: "API Creation & Integration",
      description:
        "I build and integrate APIs that enhance your website's functionality and connect it with essential third-party services. From custom APIs for unique features to seamless integrations with payment gateways, social media, and more, I ensure a smooth, efficient flow of data that elevates your site’s performance and capabilities.",
    },
    {
      title: "SEO Optimization",
      description:
        "I optimize websites to rank higher in search results, improving visibility and driving more organic traffic. With careful keyword research, on-page improvements, and speed optimization, I help businesses reach the right audience and grow their online presence.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <h3 className="heading mb-10">Skills that shape experiences</h3>

        <Accordion>
          {accordionContent.map((item, index) => (
            <AccordionItem index={index} key={index}>
              <AccordionTitle>{item.title}</AccordionTitle>
              <AccordionContent>{item.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default HomeSkills;
