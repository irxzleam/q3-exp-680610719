import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function StudentInfo() {
  return (
    <Drawer swipeDirection="left">
      <DrawerTrigger
        render={
          <Button
            className="border border-gray-400 rounded-md px-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            variant="secondary"
          >
            ศิรวิทย์ อินทจักร์
          </Button>
        }
      />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
          <DrawerDescription>Student information</DrawerDescription>
        </DrawerHeader>
        <img
          alt="Sirawit Intajuk"
          className="w3-border w8-padding w3-circle"
          src="/myimage.jpg"
          height="35%"
          width="50%"
        ></img>

        <div className="flex-1 p-4">
          <div
            data-slot="card-header"
            className="group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)"
          >
            <div
              data-slot="card-title"
              className="font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm"
            >
              ศิรวิทย์ อินทจักร์
            </div>
            <div
              data-slot="card-description"
              className="text-sm text-muted-foreground"
            >
              นักศึกษาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่
            </div>
            <p className="my-2">
              <span
                data-slot="badge"
                data-variant="default"
                className="group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;&gt;svg]:pointer-events-none [&amp;&gt;svg]:size-3! bg-primary text-primary-foreground [a]:hover:bg-primary/80"
              >
                Hobbies
              </span>{" "}
              ดูหนัง, เดินทาง, ขี่มอเตอร์ไซค์
            </p>
            <p className="my-2">
              <span
                data-slot="badge"
                data-variant="default"
                className="group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;&gt;svg]:pointer-events-none [&amp;&gt;svg]:size-3! bg-primary text-primary-foreground [a]:hover:bg-primary/80"
              >
                Email
              </span>{" "}
              sirawit_int@cmu.ac.th
            </p>
            <p className="my-2">
              <span
                data-slot="badge"
                data-variant="default"
                className="group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;&gt;svg]:pointer-events-none [&amp;&gt;svg]:size-3! bg-primary text-primary-foreground [a]:hover:bg-primary/80"
              >
                Social
              </span>{" "}
              IG:mmsitdown
            </p>
            <div
              data-slot="card-footer"
              className="flex items-center rounded-b-xl border-t bg-muted/50 p-(--card-spacing)"
            >
              รหัสนักศึกษา: 680610719
            </div>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button>Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
// Use Drawer component to display student information
/*<div className="flex-1 p-4">
      <button className="border border-gray-300 rounded-md px-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
        ศิรวิทย์ อินทจักร์
      </button>
    </div>
  );
}
*/
