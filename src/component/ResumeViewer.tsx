
import { Modal, ActionIcon, Tooltip } from "@mantine/core";
import { Document, Page } from 'react-pdf';
import { IconFileDownload } from '@tabler/icons-react';
import { Info } from "../User";


const ResumeViewer = (props: any) => {

      return (
            <div>
                  <Modal.Root size="50%" opened={props.opened} onClose={props.close}>
                        <Modal.Overlay className="!backdrop-opacity-85 !blur-sm" />
                        <Modal.Content className="!rounded-xl font-mono">
                              <Modal.Header className=" !bg-bgColor !border-2  !border-primaryColor !rounded-tl-xl !rounded-tr-xl !border-b-0">
                                    <Modal.Title className="!flex !gap-6 !items-center  text-white !text-4xl !font-bold !italic">
                                          Resume
                                          <Tooltip label="Download"  position="right" offset={8}>
                                                <ActionIcon component="a" href="Resume_Subhranil Das.pdf" download={Info.name} variant="light" color="orange" size="lg" radius="md" aria-label="Settings">
                                                      <IconFileDownload style={{ width: '70%', height: '70%' }} stroke={1.5} />
                                                </ActionIcon>
                                          </Tooltip>
                                    </Modal.Title>
                                    <Modal.CloseButton
                                          size="md"
                                          iconSize="30px"
                                          className="!bg-bgColor !text-red-600"
                                    />
                              </Modal.Header>
                              <Modal.Body className="!bg-bgColor !border-2  !border-primaryColor !rounded-bl-xl !rounded-br-xl !border-t-0">
                                    <Document file="Resume_Subhranil Das.pdf"> <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} /></Document>
                              </Modal.Body>
                        </Modal.Content>
                  </Modal.Root>
            </div>
      )
}

export default ResumeViewer
