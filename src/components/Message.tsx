interface MessageProps {
  text: string
  myself?: boolean
  authorName: string
  time?: Date
}

export default function Message({
  text,
  myself = false,
  authorName,
  time,
}: MessageProps) {
  if (myself) {
    return (
      <div className="mb-8 flex flex-col items-end drop-shadow-sm">
        <h5 className="mb-3">Você - 11:30</h5>
        <div className="p-6 max-w-xl w-fit bg-cyan-700 rounded-t-lg rounded-l-lg shadow-lg text-white">
          <p className="">{text}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="mb-8 drop-shadow-lg">
      <h5 className="mb-3">{authorName} - 11:30</h5>

      <div className="p-6 max-w-xl w-fit bg-lime-700 rounded-b-lg rounded-r-lg shadow-lg text-white">
        <p className="">{text}</p>
      </div>
    </div>
  )
}
