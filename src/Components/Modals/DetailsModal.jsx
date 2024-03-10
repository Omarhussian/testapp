import React from 'react'
import { Modal } from 'antd'
const DetailsModal = ({ isDetialsOpen, setIsDetialsOpen, selectedTask }) => {
    return (
        <Modal
            title="Task Details"
            open={isDetialsOpen}
            onCancel={() => setIsDetialsOpen(false)}
            footer={null}
        >
            {selectedTask && (
                <div className='flex'>
                    <div className="p-4 flex flex-col gap-y-4 items-start justify-start">
                        <div className="flex w-full items-center gap-x-2">
                            <span className="font-bold">Title:</span>
                        </div>

                        <div className="flex items-center gap-x-2">
                            <span className="font-bold">ID:</span>
                        </div>

                        <div className="flex items-center gap-x-2">
                            <span className="font-bold">Completed:</span>
                        </div>

                    </div>
                    <div className="p-4 flex flex-col gap-y-4 items-start justify-start">
                        <div className="flex w-full  items-center gap-x-2">
                            <span className=''>{selectedTask.title}</span>
                        </div>

                        <div className="flex items-center gap-x-2">
                            <span>{selectedTask.id}</span>
                        </div>

                        <div className="flex items-center gap-x-2">
                            <span>{selectedTask.completed ? 'Yes' : 'No'}</span>
                        </div>

                    </div>
                </div>
            )}
        </Modal>
    );
}

export default DetailsModal