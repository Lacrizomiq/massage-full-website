import { Separator } from "@/components/ui/separator";

export const Description = () => (
  <>
    <div className="w-full py-8 lg:py-12">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center">
          <div className="flex-1 w-full h-full rounded-md bg-muted aspect-video"></div>
          <div className="flex flex-col flex-1 gap-4 pl-0 lg:pl-20">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl tracking-tighter text-left md:text-3xl lg:max-w-xl font-regular">
                This is the start of something new
              </h2>
              <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Separator />
    <div className="w-full py-8 lg:py-12">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="flex flex-col flex-1 gap-4">
            <div></div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl tracking-tighter text-left md:text-3xl lg:max-w-xl font-regular">
                This is the start of something new
              </h2>
              <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-sm text-muted-foreground">
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
          </div>
          <div className="flex-1 w-full h-full rounded-md bg-muted aspect-video"></div>
        </div>
      </div>
    </div>
  </>
);
