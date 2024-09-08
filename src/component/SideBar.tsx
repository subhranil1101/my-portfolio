import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Slider } from '@mantine/core';

const SideBar = ()=> {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}

export default SideBar;