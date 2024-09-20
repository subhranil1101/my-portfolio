
import { Modal, ActionIcon, Tooltip, useMatches } from "@mantine/core";
import { Document, Page } from 'react-pdf';
import { IconFileDownload } from '@tabler/icons-react';
import { Info } from "../User";


const ResumeViewer = (props: any) => {

      const myScale = useMatches({
            '2xl':1.7,
            'xl':1,
            'lxl':1,
            'lg':1,
            'md':0.8,
            // 'xs':0.5,
            // 'sm':0.2,
            // 'bs':1,
            // 'md':0.8,
            // 'xs':1
      })

      const modalSize = useMatches({
            '2xl':'2xl',
            'xl':'xl',
            'lg':'xl',
            'md':'xl',
            'sm':'sm',
            'xs':'xl',
      })

      return (
            <div>
                  <Modal.Root  size={modalSize} opened={props.opened} onClose={props.close}>
                        <Modal.Overlay className="!backdrop-opacity-85 !blur-sm" />
                        <Modal.Content className="!rounded-xl font-mono">
                              <Modal.Header className=" !bg-bgColor !border-2  !border-primaryColor !rounded-tl-xl !rounded-tr-xl !border-b-0 !w-[100%]">
                                    <Modal.Title className="!flex !gap-6 !items-center  text-white !text-4xl !font-bold !italic">
                                          Resume
                                          <Tooltip label="Download"  position="right" offset={8}>
                                                <ActionIcon component="a" href="/Resume_Subhranil Das.pdf" download={Info.name} variant="light" color="orange" size="lg" radius="md" aria-label="Settings">
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
                                    <Document  file="./Resume_Subhranil Das.pdf"> <Page className='flex justify-center content ' canvasBackground="transparent" scale={myScale}  pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} /></Document>
                              </Modal.Body>
                        </Modal.Content>
                  </Modal.Root>
            </div>
      )
}

export default ResumeViewer
