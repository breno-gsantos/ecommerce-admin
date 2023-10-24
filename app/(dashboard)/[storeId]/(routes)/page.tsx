import prisma from "@/prisma/client"

interface DashboardPageProps{
  params: {storeId: string}
}

const DashboardPage: React.FC<DashboardPageProps> = async ({params}) => {
  const store = await prisma.store.findFirst({
    where: {
      id: params.storeId
    }
  });

  return (
    <div>
      Active Store: {store?.name}
    </div>
  )
}

export default DashboardPage