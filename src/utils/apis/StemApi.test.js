import { stemTextApi } from './StemApi';

const text = "مكتبة لمعالجة الكلمات العربية وتجذيعها";

const target = [
    {
        "stem": "مكتب",
        "word": "مكتبة"
    },
    {
        "stem": "معالج",
        "word": "معالجة"
    },
    {
        "stem": "عرب",
        "word": "العربية"
    },
    {
        "stem": "تجذيع",
        "word": "وتجذيعها"
    }
]

//const request = stemTextApi(text)
//const result = request.data

/*test('test stemming api', () => {
  expect(result).toBe(terget);
});*/
