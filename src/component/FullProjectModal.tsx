import {
  Modal,
  Button,
  Image,
  Badge,
  Indicator,
  Group,
  Text,
  useMatches
} from "@mantine/core";
import { IconArrowRight, IconBrandGithub } from "@tabler/icons-react";

const FullProjectModal = (props: any) => {
  const modalSize = useMatches({
    '2xl': '2xl',
    'xl': 'xl',
    'lg': 'xl',
    'md': 'xl',
    'sm': 'sm',
    'xs': 'xl',
  })
  return (
    <div>
      <Modal.Root size={modalSize} opened={props.opened} onClose={props.close}>
        <Modal.Overlay className="!backdrop-opacity-85 !blur-sm"/>
        <Modal.Content className="!rounded-xl font-mono">
          <Modal.Header className=" !bg-bgColor !border-2  !border-primaryColor !rounded-tl-xl !rounded-tr-xl !border-b-0">
            <Modal.Title className="!flex xs-mx:!flex-col !gap-6 items-center xs-mx:!gap-1  text-white !text-4xl md-mx:!text-3xl xs-mx:!text-2xl !font-bold !italic">
              <div >{props.title}</div>
              
              {props.live === true && (
                <Badge
                  size="md"
                  variant="outline"
                  color="red"
                  rightSection={
                    <Indicator
                      color="red"
                      position="middle-end"
                      size={10}
                      processing
                    />
                  }
                  className="!w-fit"
                >
                  Live &nbsp;
                </Badge>
              )}
            </Modal.Title>
            <Modal.CloseButton
              size="md"
              iconSize="30px"
              className="!bg-bgColor !text-red-600"
            />
          </Modal.Header>
          <Modal.Body className="!bg-bgColor !border-2  !border-primaryColor !rounded-bl-xl !rounded-br-xl !border-t-0">
            <Image
              className="!rounded-xl  !shadow-[0_0_5px_0_#64FFDA] "
              src={props.image}
              alt={props.image}
            />
            <Group
              className="!flex !items-center !justify-center"
              justify=""
              mt="md"
              mb="md"
            >
              {props.technologies.map((tech: string, index: number) => (
                <Badge
                  key={index}
                  className="!text-xs"
                  variant="light"
                  color="yellow"
                  size="xl"
                >
                  {tech}
                </Badge>
              ))}
            </Group>
            <Text
              className="text-justify !text-primaryColor md-mx:!text-sm"
              size="xl"
              c="dimmed"
            >
              {props.desc}
            </Text>
            <Group mt="md" mb="md">
              <a href={props.github} target="_blank" rel="noreferrer">
                <Button
                  variant="outline"
                  color="orange"
                  leftSection={<IconBrandGithub size={20} />}
                >
                  Source Code
                </Button>
              </a>

              <a href={props.link} target="_blank" rel="noreferrer" >
              <Button
                variant="light"
                color="green"
                size='compact-xl'
                rightSection={<IconArrowRight size={20} />}
              >
                Visit Site
              </Button>
              </a>
            </Group>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </div>
  );
};

export default FullProjectModal;
