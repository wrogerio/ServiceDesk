// function to add 3 hours to date
export const ConvertToPtBrUTC = (valor) => {
    let d = new Date(valor)
    d.setHours(d.getHours() + 3);
    return d
};


// function to get date time now in format dd/MM/yyyy
export const ConvertToPtBRDateFormat = (valor) => {
    let xData = valor.split('T')[0]
    let d = ConvertToPtBrUTC(xData)

    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    return `${day < 10 ? `0${day}` : `${day}`}/${month < 10 ? `0${month}` : `${month}`}/${year}`;
};

// function to get date time now in format dd/MM
export const ConvertToPtBRDateFormatSmall = (valor) => {
    let xData = valor.split('T')[0]
    let d = ConvertToPtBrUTC(xData)

    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    return `${day < 10 ? `0${day}` : `${day}`}/${month < 10 ? `0${month}` : `${month}`}`;
};

// function to get date time now in format yyyy-MM-dd
export const ConvertToStringDate = (valor) => {
    let xData = valor.split('T')[0]
    let d = ConvertToPtBrUTC(xData)

    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    return `${year}-${month < 10 ? `0${month}` : `${month}`}-${day < 10 ? `0${day}` : `${day}`}`;
};

export const ConvertToBrlCurrency = (numero) => {
    return numero?.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
};

export const ConvertNumberTwoDigits = (numero) => {
    return numero < 10 ? `0${numero}` : numero;
};

export const ConvertToMesNome = (mesNumero) => {
    switch (mesNumero) {
        case 1:
            return "Janeiro";
            break;
        case 2:
            return "Fevereiro";
            break;
        case 3:
            return "Março";
            break;
        case 4:
            return "Abril";
            break;
        case 5:
            return "Maio";
            break;
        case 6:
            return "Junho";
            break;
        case 7:
            return "Julho";
            break;
        case 8:
            return "Agosto";
            break;
        case 9:
            return "Setembro";
            break;
        case 10:
            return "Outubro";
            break;
        case 11:
            return "Novembro";
            break;
        case 12:
            return "Dezembro";
            break;
        default:
            return "";
            break;
    }
};

export const ConvertToMesSigla = (mesNumero) => {
    switch (mesNumero) {
        case 1:
            return "Jan";
            break
        case 2:
            return "Fev";
            break
        case 3:
            return "Mar";
            break
        case 4:
            return "Abr";
            break
        case 5:
            return "Mai";
            break
        case 6:
            return "Jun";
            break
        case 7:
            return "Jul";
            break
        case 8:
            return "Ago";
            break
        case 9:
            return "Set";
            break
        case 10:
            return "Out";
            break
        case 11:
            return "Nov";
            break
        case 12:
            return "Dez";
            break
        default:
            return "";
            break
    }
};
