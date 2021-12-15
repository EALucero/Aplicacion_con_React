import React from "react";
import CardInfoMovies from "./CardInfoMovies"

const cardsContent = [
    {
        id: 1,
        title: "Movies in Data Base",
        borderColor: "primary",
        quantity: 21,
        icon: "fa-film"
    },
    {
        id: 2,
        title: "Total awards",
        borderColor: "success",
        quantity: 79,
        icon: "fa-award"
    },
    {
        id: 3,
        title: "Actors quatity",
        borderColor: "warning",
        quantity: 49,
        icon: "fa-user"
    },
    {
        id: 4,
        title: "New component",
        borderColor: "danger",
        array: [1, 2, 3, 4]
    }
]

export default function RowTop () {
    return (
        <div className="row">
            {cardsContent.map((item) => (
                <CardInfoMovies
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    borderColor={item.borderColor}
                    icons={item.icon}
                    quantity={item.quantity}
                    array={item.array}
                />
            ))}
        </div>
    )
}