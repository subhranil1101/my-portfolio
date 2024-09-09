import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";
import { Burger } from "@mantine/core";
import { navLinks } from "./Header";

const SideBar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <>
      <Drawer.Root
        className="!z-[0]"
        opened={opened}
        size="50%"
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
          className="!z-0"
          style={{ backgroundOpacity: "0.5", blur: "4" }}
        />
        <Drawer.Content className="!z-[0]" bg="#0A192F">
          <Drawer.Body className="mt-24 text-2xl flex flex-col gap-10">{navLinks(true)}</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
      <Burger
        size="lg"
        className=" md:hidden z-10 fixed"
        color="#64FFDA"
        opened={opened}
        onClick={toggle}
      />
    </>
  );
};

export default SideBar;
