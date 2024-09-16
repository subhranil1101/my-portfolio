import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";
import { Burger } from "@mantine/core";
import { navLinks } from "./Header";

const SideBar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <>
      <Drawer.Root
        className="!z-[30]"
        opened={opened}
        size="30%"
        position="right"
        onClose={toggle}
        transitionProps={{
          transition: "rotate-right",
          duration: 150,
          timingFunction: "linear",
        }}
        // overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        <Drawer.Overlay
          className="!z-20 !backdrop-opacity-85 !blur-sm"
        />
        <Drawer.Content className="!z-[30]" bg="#0A192F">
          <Drawer.Body className="mt-24 text-2xl flex flex-col gap-10" onClick={toggle}>{navLinks(true)  }</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
      <Burger
        size="lg"
        className=" md:hidden !z-40 relative !pt-9 !-right-20"
        color="#64FFDA"
        opened={opened}
        onClick={toggle}
      />
    </>
  );
};

export default SideBar;
