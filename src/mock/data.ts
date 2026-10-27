import { FullDeckDto, FullSubjectDto } from "@/shared/types";

export const mockSubjects: FullSubjectDto[] = [
    { id: 1, name: "Internet tehnologije", createdAt: new Date("2026-10-27") },
    { id: 2, name: "Napredna analiza podataka", createdAt: new Date("2026-10-27") },
    { id: 3, name: "Dinamika organizacionih sistema", createdAt: new Date("2026-10-27") },
    { id: 4, name: "Modelovanje poslovnih procesa", createdAt: new Date("2026-10-27") },
    { id: 5, name: "Menadžment ljudskih resursa", createdAt: new Date("2026-10-27") },
    { id: 6, name: "Inteligentni sistemi", createdAt: new Date("2026-10-27") },
    { id: 7, name: "Duboko učenje i neuronske mreže", createdAt: new Date("2026-10-27") },
    { id: 8, name: "Osnovi kvaliteta softvera", createdAt: new Date("2026-10-27") },
    { id: 9, name: "Razvoj i održavanje softvera", createdAt: new Date("2026-10-27") },
    { id: 10, name: "Poslovna inteligencija", createdAt: new Date("2026-10-27") },
];

// Helper funkcija da se pronadje predmet u listi
const S = (id: number) => mockSubjects.find((s) => s.id === id)!;

export const mockDecks: FullDeckDto[] = [
    {
        id: 11,
        name: "HTTP i web",
        createdAt: new Date("2026-10-27"),
        subject: S(1),
        cardsCount: 40,
    },
    {
        id: 21,
        name: "Priprema podataka",
        createdAt: new Date("2026-10-27"),
        subject: S(2),
        cardsCount: 30,
    },
    {
        id: 31,
        name: "Organizaciona struktura",
        createdAt: new Date("2026-10-27"),
        subject: S(3),
        cardsCount: 18,
    },
    {
        id: 41,
        name: "BPMN dijagrami",
        createdAt: new Date("2026-10-27"),
        subject: S(4),
        cardsCount: 28,
    },
    {
        id: 51,
        name: "Regrutacija i selekcija",
        createdAt: new Date("2026-10-27"),
        subject: S(5),
        cardsCount: 20,
    },
    {
        id: 61,
        name: "Pretraga i heuristike",
        createdAt: new Date("2026-10-27"),
        subject: S(6),
        cardsCount: 24,
    },
    {
        id: 71,
        name: "Neuronske mreže",
        createdAt: new Date("2026-10-27"),
        subject: S(7),
        cardsCount: 32,
    },
    {
        id: 81,
        name: "Testiranje softvera",
        createdAt: new Date("2026-10-27"),
        subject: S(8),
        cardsCount: 16,
    },
    {
        id: 91,
        name: "Životni ciklus softvera",
        createdAt: new Date("2026-10-27"),
        subject: S(9),
        cardsCount: 21,
    },
    {
        id: 101,
        name: "Skladišta podataka",
        createdAt: new Date("2026-10-27"),
        subject: S(10),
        cardsCount: 19,
    },
];