import {
      Card,
      Image,
      Text,
      Badge,
      Button,
      Group,
      Indicator,
      useMatches,
} from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import FullProjectModal from "./FullProjectModal";



const ProjectCard = (props: any) => {
      const [opened, { open, close }] = useDisclosure(false);
      const btn = useMatches({
            xs:'xs',
            sm:'sm',
            md:'md',
            lg:'lg'
      })
      return (
            <div className="lg-mx:w-full">
                  <Card data-aos="fade-up"
                        data-aos-duration="500"
                        className=" !flex !flex-col !justify-between !bg-transparent !border-2 cursor-pointer transition-transform duration-300 ease-in-out !border-primaryColor hover:!scale-105 hover:!shadow-[0_0_10px_1px_#64FFDA] lg-mx:!w-[70%] lg-mx:!m-auto"
                        w="360px"
                        h="auto"
                        shadow="lg"
                        padding="sm"
                        radius="lg"
                        withBorder
                  >
                        <Card.Section className="p-2 h-48 lg-mx:!h-auto m-4 sm-mx:m-auto ">
                              <Image className="!rounded-xl !shadow-[0_0_5px_0_#64FFDA] " src={props.image} alt={props.image} />
                        </Card.Section>

                        <Group className="" justify="space-between" mt="xs" mb="xs">
                              <Text className="!text-2xl sm-mx:!text-lg !font-mono !font-bold !text-white">
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

                        <Group className="!flex !items-center !justify-normal sm-mx:!gap-1 sm-mx:!my-0 sm-mx:!justify-center" justify="" mt="xs" mb="xs">
                              {props.technologies.map((tech: string, index: number) => index < 3 && <Badge key={index} className="!text-xs sm-mx:!text-[10px]"  variant="light" color="orange" size={btn}>{tech}</Badge>)}
                        </Group>
                        <Text
                              className="text-justify sm-mx:!text-xs !text-primaryColor !line-clamp-3"
                              size="sm"
                              c="dimmed"
                              // lineClamp={4}
                        >
                              {props.desc}
                        </Text>

                        <Button onClick={open} color="green" fullWidth size={btn} mt={btn} radius="xl">
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
            </div>
      );
};

export default ProjectCard;
