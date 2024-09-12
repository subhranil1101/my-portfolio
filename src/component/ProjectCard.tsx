import {
      Card,
      Image,
      Text,
      Badge,
      Button,
      Group,
      Indicator,
} from "@mantine/core";

const ProjectCard = (props: any) => {
      return (
            <Card
                  className="!bg-transparent !border-2 cursor-pointer transition-transform duration-300 ease-in-out !border-primaryColor hover:!scale-105 hover:!shadow-[0_0_10px_1px_#64FFDA]"
                  w="360px"
                  h="auto"
                  shadow="lg"
                  padding="sm"
                  radius="lg"
                  withBorder
            >
                  <Card.Section className="p-2 h-48 m-5 ">
                        <Image className="!rounded-xl !shadow-[0_0_5px_0_#64FFDA] " src={props.image} alt={props.image} />
                  </Card.Section>

                  <Group className="h-5" justify="space-between" mt="xs" mb="xs">
                        <Text className="!text-xl !font-mono !font-bold !text-white">
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

                  <Group className="!flex !items-center !justify-normal" justify="" mt="lg" mb="lg">
                        {props.technologies.map((tech:string,index:number) => index <3 && <Badge key={index} className="!text-xs" variant="light" color="orange" size="lg">{tech}</Badge>)}
                  </Group>
                  <Text
                        className="text-justify !text-primaryColor h-30"
                        size="sm"
                        c="dimmed"
                        lineClamp={5}
                  >
                        {props.desc}
                  </Text>

                  <Button className="" color="green" fullWidth mt="md" radius="xl">
                        Show More
                  </Button>
            </Card>
      );
};

export default ProjectCard;
