const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, LinkValue, ExternalHyperlink } = require("docx");

const doc = new Document({
    sections: [{
        properties: {},
        children: [
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                    new TextRun({
                        text: "Alberto Ramos",
                        bold: true,
                        size: 32,
                    }),
                ],
            }),
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                    new TextRun({
                        text: "Desenvolvedor Full Stack & Engenheiro de Automação (IA)",
                        size: 24,
                    }),
                ],
            }),
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                    new TextRun({
                        text: "Paulista, PE | seuemail@exemplo.com | (81) 9XXXX-XXXX",
                        size: 20,
                    }),
                ],
            }),
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                    new TextRun({ text: "LinkedIn: linkedin.com/in/seu-perfil | GitHub: github.com/seu-usuario", size: 20 }),
                ],
            }),

            new Paragraph({ text: "", spacing: { before: 200 } }),

            new Paragraph({
                text: "Resumo Profissional",
                heading: HeadingLevel.HEADING_1,
                border: { bottom: { color: "auto", space: 1, value: "single", size: 6 } }
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "Desenvolvedor Full Stack focado em criar soluções digitais escaláveis e automatizar operações complexas utilizando Inteligência Artificial. Experiência sólida na construção de sistemas web modernos, integrações de APIs e fluxos automatizados que reduzem trabalho manual e aumentam a produtividade. Autodidata, com perfil analítico e orientado a resultados.",
                        size: 22,
                    }),
                ],
            }),

            new Paragraph({
                text: "Competências Técnicas",
                heading: HeadingLevel.HEADING_1,
                spacing: { before: 200 },
                border: { bottom: { color: "auto", space: 1, value: "single", size: 6 } }
            }),
            new Paragraph({
                bullet: { level: 0 },
                children: [new TextRun({ text: "Linguagens & Front-End: JavaScript (ES6+), TypeScript, HTML5, CSS3, React.js, UX/UI Design.", size: 22 })],
            }),
            new Paragraph({
                bullet: { level: 0 },
                children: [new TextRun({ text: "Back-End & Dados: Node.js, APIs REST, Modelagem e consumo de Banco de Dados (SQL).", size: 22 })],
            }),
            new Paragraph({
                bullet: { level: 0 },
                children: [new TextRun({ text: "IA & Automação: Engenharia de Prompt, Estruturação de Agentes de IA, Automação de Fluxos de Trabalho, Integração de SaaS.", size: 22 })],
            }),
            new Paragraph({
                bullet: { level: 0 },
                children: [new TextRun({ text: "DevOps & Ferramentas: Git, GitHub, Deploy Cloud (Vercel), CI/CD básico, Debugging.", size: 22 })],
            }),

            new Paragraph({
                text: "Experiência Profissional",
                heading: HeadingLevel.HEADING_1,
                spacing: { before: 200 },
                border: { bottom: { color: "auto", space: 1, value: "single", size: 6 } }
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "HCvape (Projeto Comercial)", bold: true, size: 22 }),
                    new TextRun({ text: " | 2026", size: 22 }),
                ],
            }),
            new Paragraph({
                bullet: { level: 0 },
                children: [new TextRun({ text: "Projetou e desenvolveu do zero um sistema Full Stack para operação comercial e gestão de pedidos.", size: 22 })],
            }),
            new Paragraph({
                bullet: { level: 0 },
                children: [new TextRun({ text: "Estruturou fluxos administrativos integrados com IA, centralizando a operação e reduzindo drasticamente tarefas manuais.", size: 22 })],
            }),
            new Paragraph({
                bullet: { level: 0 },
                children: [new TextRun({ text: "Modelagem de banco de dados e criação de APIs REST em TypeScript.", size: 22 })],
            }),

            new Paragraph({ text: "", spacing: { before: 100 } }),

            new Paragraph({
                children: [
                    new TextRun({ text: "B3 Ambientes Corporativos (Freelance)", bold: true, size: 22 }),
                    new TextRun({ text: " | 2025", size: 22 }),
                ],
            }),
            new Paragraph({
                bullet: { level: 0 },
                children: [new TextRun({ text: "Construção de website institucional moderno e responsivo focado em conversão e performance.", size: 22 })],
            }),
            new Paragraph({
                bullet: { level: 0 },
                children: [new TextRun({ text: "Atuação na interface e experiência do usuário (UI/UX).", size: 22 })],
            }),

            new Paragraph({
                text: "Formação Acadêmica",
                heading: HeadingLevel.HEADING_1,
                spacing: { before: 200 },
                border: { bottom: { color: "auto", space: 1, value: "single", size: 6 } }
            }),
            new Paragraph({
                children: [new TextRun({ text: "Análise e Desenvolvimento de Sistemas | Conclusão: Dezembro de 2025", size: 22 })],
            }),

            new Paragraph({
                text: "Idiomas",
                heading: HeadingLevel.HEADING_1,
                spacing: { before: 200 },
                border: { bottom: { color: "auto", space: 1, value: "single", size: 6 } }
            }),
            new Paragraph({
                children: [new TextRun({ text: "Português: Nativo | Inglês: Intermediário / Técnico Avançado", size: 22 })],
            }),
        ],
    }],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("Curriculo_Alberto_Ramos.docx", buffer);
    console.log("Currículo DOCX gerado com sucesso!");
});
