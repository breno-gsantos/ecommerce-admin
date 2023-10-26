import SizeForm from "./components/size-form"
import prisma from "@/prisma/client"

export default async function SizePage({ params }: { params: { sizeId: string } }) {
  const size = await prisma.size.findUnique({
    where: {
      id: params.sizeId
    }
  })

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm initialData={size} />
      </div>
    </div>
  )
}