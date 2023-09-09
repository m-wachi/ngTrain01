namespace api01.Models

type Data01(pProp01: string, pProp02: int) =
    let mutable prop01: string = pProp01
    let mutable prop02: int = pProp02
    new() = Data01("", 0)
    member this.Prop01
        with get(): string = prop01
        and set(v: string) = prop01 <- v
    member this.Prop02
        with get(): int = prop02
        and set(v: int) = prop02 <- v
