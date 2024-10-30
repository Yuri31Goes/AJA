export const PagementosElemens = {
    CPF:'#input_frm\\:usuario',
    Senha:'#input_frm\\:senha',
    BotãoEntrar: '#frm\\:btnEntrar',
    BotãoBeneficiários: '#dtLj_idt8\\:j_idt27',
    SelectBeneficiário: '#j_idt8\\:j_idt29 > a',
    BotãoNovoBeneficiário:'#form\\:j_idt105 > .ui-button-text',
    FormCPF:'#form\:tabView\:accord\:cpf',
    FormmeNome: '#form\:tabView\:accord\:nome',
    FormeNomeMãe: '#form\:tabView\:accord\:nomeMae',
    FormDatadeNascimento:'#form\:tabView\:accord\:dtNascim_input',
    FormSexobtn: '#form\:tabView\:accord\:dtNascim_input',

    getSexo(number){
      return `#form\:tabView\:accord\:sexo_${number}`
    }, 

    FormMunibtn: 'form\:tabView\:accord\:municipio2_label',

    getMunicipio(number){
        return `#form\:tabView\:accord\:municipio2_${number}`
    }
    
}