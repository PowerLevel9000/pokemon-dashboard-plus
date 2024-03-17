/// <reference types="react-scripts" />

type Pokemon = {
    name: string;
    url: string;
}

type PokemonList = {
    count: number;
    next: string;
    previous: string;
    results: Pokemon[];
}

type PokemonType = {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}

type ListResponse<T> = {
    page: number
    per_page: number
    total: number
    total_pages: number
    data: T[]
    results: Pokemon[]
}
interface CustomButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    isLoading: boolean;
}
