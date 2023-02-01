import { PaperPlaneRight } from 'phosphor-react'

export default function Input() {
  return (
    <div className="pt-6 flex gap-4">
      <input
        placeholder="Digite sua mensagem"
        className="bg-emerald-900 rounded-full p-5 px-7 w-full text-sm"
      />
      <div className="bg-emerald-900 rounded-full aspect-square	p-4 flex">
        <button>
          <PaperPlaneRight size={24} weight="fill" />
        </button>
      </div>
    </div>
  )
}
