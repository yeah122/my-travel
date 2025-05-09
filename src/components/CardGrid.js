import Card from "@/components/Card";

export default function CardGrid({ contents = [], onClickEvent }) {
    if (contents.length < 0) return

    return (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-6 p-6">
            {contents.map(element => {
                return (
                    <Card
                        key={element.id}
                        content={element}
                        onClickEvent={onClickEvent}
                    />
                )
            })}
        </div>
    )
}