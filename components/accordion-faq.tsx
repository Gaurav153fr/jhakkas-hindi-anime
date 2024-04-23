import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionFaq() {
  return (
    <Accordion type="single" collapsible className="w-full ">
      <AccordionItem value="item-1">
        <AccordionTrigger>Episode is not in Hindi?</AccordionTrigger>
        <AccordionContent>
          You can change the language of episode in setting of video player.
          Click the button with headphone icon.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Where are other episode.</AccordionTrigger>
        <AccordionContent>
          We will publish new episode as soon as possible just wait for little
          or contact us.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Player is not working.</AccordionTrigger>
        <AccordionContent>
          Try with your adblocker disabled. Refresh the site if it still persist
          contact us.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
