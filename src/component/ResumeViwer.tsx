
import { Modal } from "@mantine/core";
import { Document, Page } from 'react-pdf';

const ResumeViwer = (props: any) => {

      return (
            <div>
                  <Modal.Root size="50%" opened={props.opened} onClose={props.close}>
                        <Modal.Overlay className="!backdrop-opacity-85 !blur-sm" />
                        <Modal.Content className="!rounded-xl font-mono">
                              <Modal.Header className=" !bg-bgColor !border-2  !border-primaryColor !rounded-tl-xl !rounded-tr-xl !border-b-0">
                                    <Modal.Title className="!flex !gap-6 items-center  text-white !text-4xl !font-bold !italic">
                                          Resume
                                    </Modal.Title>
                                    <Modal.CloseButton
                                          size="md"
                                          iconSize="30px"
                                          className="!bg-bgColor !text-red-600"
                                    />
                              </Modal.Header>
                              <Modal.Body className="!bg-bgColor !border-2  !border-primaryColor !rounded-bl-xl !rounded-br-xl !border-t-0">
                                    <Document file="./Resume_Subhranil Das.pdf"> <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} /></Document>
                              </Modal.Body>
                        </Modal.Content>
                  </Modal.Root>
            </div>
      )
}

export default ResumeViwer
