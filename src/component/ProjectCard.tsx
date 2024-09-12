import {
      Card,
      Image,
      Text,
      Badge,
      Button,
      Group,
      Indicator,
} from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import FullProjectModal from "./FullProjectModal";



const ProjectCard = (props: any) => {
      const [opened, { open, close }] = useDisclosure(false);
      return (
            <>

                  <Card
                        className=" !flex !flex-col !justify-between !bg-transparent !border-2 cursor-pointer transition-transform duration-300 ease-in-out !border-primaryColor hover:!scale-105 hover:!shadow-[0_0_10px_1px_#64FFDA]"
                        w="360px"
                        h="auto"
                        shadow="lg"
                        padding="sm"
                        radius="lg"
                        withBorder
                  >
                        <Card.Section className="p-2 h-48 m-4 ">
                              <Image className="!rounded-xl !shadow-[0_0_5px_0_#64FFDA] " src={props.image} alt={props.image} />
                        </Card.Section>

                        <Group className="" justify="space-between" mt="xs" mb="xs">
                              <Text className="!text-2xl !font-mono !font-bold !text-white">
                                    {props.title}
                              </Text>
                              {props.live === true && (
                                    <Badge
                                          variant="outline"
                                          color="red"
                                          rightSection={
                                                <Indicator
                                                      color="red"
                                                      position="middle-end"
                                                      size={9}
                                                      processing
                                                />
                                          }
                                    >
                                          Live &nbsp;
                                    </Badge>
                              )}
                        </Group>

                        <Group className="!flex !items-center !justify-normal" justify="" mt="xs" mb="xs">
                              {props.technologies.map((tech: string, index: number) => index < 3 && <Badge key={index} className="!text-xs" variant="light" color="orange" size="lg">{tech}</Badge>)}
                        </Group>
                        <Text
                              className="text-justify !text-primaryColor"
                              size="sm"
                              c="dimmed"
                              lineClamp={5}
                        >
                              {props.desc}
                        </Text>

                        <Button onClick={open} color="green" fullWidth mt="md" radius="xl">
                              Show More
                        </Button>

                        <FullProjectModal opened={opened} close={close}
                              title={props.title}
                              desc={props.desc}
                              image={props.image}
                              live={props.live}
                              link={props.link}
                              technologies={props.technologies}
                              github={props.github} />
                  </Card>
            </>
      );
};

export default ProjectCard;
