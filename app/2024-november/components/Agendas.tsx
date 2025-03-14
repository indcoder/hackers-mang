import { SPEAKERS } from "@/app/2024-november/constants"

const Agendas = () => {
    // Sorting the speakers array by the 'order' property
    const sortedAgendas = [...SPEAKERS].sort((a, b) => a.order - b.order);

    return (
        <section className="flex flex-col md:gap-4 py-4 px-4 nav-link-outline mx-6 my-4 items-center justify-center">
            <div className="text-3xl">
                Agenda
            </div>
            {sortedAgendas.map((item, idx) => (
                <div className="flex flex-col w-full overflow-hidden p-4 md:p-8 gap-1 my-1 bg-[#1d1d1c]" key={idx}>
                    <span className="text-lg md:text-2xl lg:text-3xl whitespace-pre-line">{item.topic}</span>
                    <p className="text-sm md:text-xl text-gray-30 ">
                        {item.name}
                    </p>
                </div>
            ))}
        </section>
    )
}

export default Agendas
