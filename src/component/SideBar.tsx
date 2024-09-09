import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";
import {
  IconHexagonLetterS,
  // IconSquareRoundedX,
} from "@tabler/icons-react";
import { Burger } from '@mantine/core';

const SideBar = () => {
  const [opened, { toggle}] = useDisclosure(false);
  return (
    <>
      <Drawer.Root
        opened={opened}
        size="20%"
        position="right"
        onClose={toggle}
        transitionProps={{
          transition: "rotate-right",
          duration: 150,
          timingFunction: "linear",
        }}
        // overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        <Drawer.Overlay style={{ backgroundOpacity: '0.5', blur: '4' }} />
        <Drawer.Content bg='#0A192F'>
          <Drawer.Header className="flex items-center justify-center" bg='#0A192F'>
            <Drawer.Title className="self-center">
              <IconHexagonLetterS color='#64FFDA' size={40} />
            </Drawer.Title>
            {/* <Drawer.CloseButton icon= <IconSquareRoundedX  color="#64FFDA" size={30} stroke={2} />/> */}
          </Drawer.Header>
          <Drawer.Body>Drawer content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
      <Burger size="lg" color="#64FFDA"  opened={opened} onClick={toggle} />
    </>
  );
};

export default SideBar;
