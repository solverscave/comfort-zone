import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/button";

const AdDetail = () => {
  const [ads] = useState(" ");

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-8">
          <Card className="mt-5">
            <Card.Body className="Safety-card">
              <Card.Text className="">
                <h1 className=""> Urgent Home For Rent </h1>
              </Card.Text>
            </Card.Body>
            <Card.Img
              variant="bottom"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExIVFhUXFR0XGBcYGBgYFxcXGhcXFxcYHRcYHiggGholHRcYITEhJSkrLi4uFx8zODMtNygtLi0BCgoKDg0OGxAQGy0lICUtLS0vLS0uLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJsBRgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAQIHAAj/xABNEAABAwIDBAYGBQkGBAYDAAABAgMRAAQSITEFBkFREyIyYXGBB5GhscHRFCNCUpIzQ2Jyc4KywvAVJDRTotJEVIPxFhdjs7ThJWSk/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EADARAAICAQQBAgMHBAMAAAAAAAABAhEDBBIhMUETUSJhoRQyQnGBkdEFUrHBM2KC/9oADAMBAAIRAxEAPwAXet26iVBeBxSpSI7UZZnSI4UvPbVcaOCEYQrEIEceY1q/Z7JSkYrh7BIGBsr6xBHLhVHaVmkqwzGeFIIInLUDSKrJucroyjVUE9jX3TPBJIKivEqSIUmDlHd3U12V424paUfYMExGdI6bN+2QD1QVDMR1gDocRFV3XHsSnOlLagAYBVmQYmJz91bwzyhw0ZyxqXR0sprVMHMZ1z9q7vniEocKicurAy/S/wC1PGx2VJaSFJwqGo7+fnrXTizep4MJ49pZivRUmGvYa2szoiivYalisRRYURxWMNSxXoosKIsNew1LFYinYURYaxhqaK9hosVEOGsYamw1jDRYUQxXsNTYaxhp2FEMV6Klw1jDRYqIorEVNhq0uySkJKlmFCRCZn1mplNR7KUG+gfhrGGiF1ZFKQoBUETJA0mNBpVTDRGal0EoOPZFhrGGpcNew1ZJFhrGGpcNeiiwIcNYKamw17DRYiHDWIqbDWMNOxkMV7DUiiBqQPE1qlSTEEGRIz4Ut6urHtfZphrGGpsNYw1VkkOGvFNTYaxhosCHDXqlw16iwAG2dtIcWSGcQAgERI7zAz9dCm1WyFBRCyU9aD1Vc5zy1q9svZ6W1dI+4G05QJ7YI8M/VU19Z2xxPH60BYCQiFFfMHkK8Zb58vv/AAehwuEVmdrAY5TkcwopxETnnJzqdGzrZ+CLoYjkoLGEnOYAOQHhWm1rhpTiUJYdbSpQj7MnSAI0ir17uQXSFJcTHIgzhnIZ8hWmyTfuJtfkM9jZNtJCUJSB3QJqxFIz26N01Km3MYSYSmTJnIkiYyo3uvst9lbgc7OgOfWPMAkwK6YzfTjRg4ruw9hrGGpcNew1qRRFhr2GpcNQ3NwhA6xjkOJ8qHJLljUW+EZw1iKH3Dzq9D0SO8ddXgOFa2lwhqU9GFpXkcajiV5jSuOesSdR5OiOmbVsJRXsNTNBpc4FLbWQAEqGJI8Cn4ipHrF1JPUlIHaT1s+OQzFaQ1UH3wRLTyXRUw17DWA+nCFHqzoFZHwjnWtxeNoGJREDhxNberGrsz9OXsbYa0UtIMSJ5cfVQ+62g87+SQlpr76h1vKag2cltpYWEKdVxKlFPqiuWetS6RvHSt9hivRWEptllaklxhxzVR+sSDECOIFTf2Y/CeiU28kdohXWiOWWdOGti+xS0zXTIor2Gq7q3QsoKCmBniBAM8BOtVjeKJUAc0mDEQDymqesh8xLSyCGGmdpoKbTKG8OERIJ7+fOkgqXxJ9fyrEK+8fXXNn1HqKkjfFg2djBvFdFJQgFJERAAECaFF1P3h66pKZrwZFLFqJY1SQ54FN2y2X0feFa/Skd/qqEN14oqnrMglpYGyrwcEmtfpZ4J9tYK0jinzIqP6Y3/mI/ED7ql6nK/JSwY14NjcL5AeRrBdc8PVXhcpOkq/VQtXuBqwhDiuww+f8ApKHtUBUPLlfllLHjXhFfCs/a9vyrCradST6zV9FjdHS1c8VFCfeqs/2ddDVDSf13kD3VLcn2yvhRRbthxHsoNZXoXemD1QkoHlmfbRvadu8lpRD9okxolzGo+HfSdsgYLtA/SHtFaYeJpmeZ3BoecNYw1YKa1w17Fnl0Q4axhqbDWMNFhRCU16pcNeosKOdXG3nVN4HluOEkEaRgGuca0xbL3nt2WEyhWZGFs4TCQc1Aga+OdCL3ZvQrSFutlCV5Qgkd+LQxpzoXthSAqEuhwEZqwQAeSTqRXkbpY+fJ6FKXA+X++9okphKnJznCBH4qo7Y32JCPo6SARJJGc/dj41z8jLTKjOw0O5dCA6pX5vCVERxMaUpanJLoaxRR0LYt3dqYS44zj1JIIBAGk6ifVUq94WkZOpcaP6aD7xIqtuhZ7QLyemYW00qSVJ6pEaSDz8Jp+vdksughScyIJAziqjqZrsbwxYnNbeYV2VTUo2kkiQlUczAFR7b3DZzUhQROmRy5yP8AtVLZOzLm0V1eidQTxMlJ7sWlD1UvcFgiXXbxah1RgSftK18k1UQkAyJKvvqzV5cqK3dg64ceEElOIhJBjOKrqslpw40qGIwOE5E8fCsJSnN3JmijGPSKyWyTxJPmaN2G7WOFuJMgyASR7BUL+1DaoCkMoKuZJJ9eUVVTvq+W3lYUDowmNc8RjOauOJ1cROavkcdm7ODY7KZnUAz6yatPJABJTJAnKArypD2dvRcPdIFEDCgKEDiSBV6+2uWxCnziiQnKfUBUTg4umOMk1wY2l9KfzSyG20543AMY5wdaBBpCTKQXFfeXpPcn500I3gadhAt3SVQnFprlMCaqDYDhkowkYiMyAcjHGo5ZYt3t0lBBdVmdMvgK2F8yAkqcCcWkgyR4RRS/2FhcZ6ZCTKjGc6JmlretKfpLY0HAADnW2HHFujLJJpWMNpdWi+y444oECAnCJPCTTRsk26yWwyEEAGSZPrHGudbuBOIxP5VOsfpU/bvj+8Oa9gaR76WWCUqQ8cm1YebtR94qT91QKh6znSFtZSHHlWzVikkqMlJiY1URkAO810ZP9Z0G3dbGK4VAnpimeMBKTHhJNZpMuxAudk3LAkJWEjVDmYA7nEzHmTVWw2yw6SnFhWDmhRAIPdzrql/qPCuQ7zbJs27pwBhUyCQnJMlKSYE5a1o0qEmwyCmZ9tQbR2i00JUoTwA1PlQW1W0kwi3Inms1aWy3ixhpKVZZj4DnU7UPcUrzaTy4mUJmQ2O0e9R4eFEbPbgSkA2Vus/eWCT586HPDrVug00myWwsneB77FtaI8Gp95qA74XPBxtP6jKB7xVdpfuNK5Set4/GujHhTXJlLI10Nru9F3AJu3AFaQEp7uAqBnazzysP0p9R/XUPcaC7TdSWrfqhOFJCjPaOLWmv0UMJVeOmEqAaVhMgxmOVOWKKViU23QPVbKV2lrV4qUfjXhsidEE+RNdT2LbQymUZ56iDqe6r4b7h7a5ePY259zj17ZlohCkFJgGDlrQO4XhfQrvB9RrqG9u7z9w/jbCcOECSoDPw1pduvRzdOFJ6RlMfpLPuRWqaohoMOLAEkgCgd5tspUQlOQMeI5zTc/urjRhU5BwhJUlJ4cpIqsncZEkqfWZEHqpHvmujLqL4izCGH3QN2fcFxOLDGeWcz31Yw1audisW6cnHCrgnEkDxICdPfUZSOFbYc2/h9meTE48kGGvVNhr1b2Y0cz2U5bqSemtVriMw4sJMcIAjymiF5bh9SENw1bhOPtShA4qOLOOFdI3ieWxblaGkLRCgUhBKpJhJGHIeYoJu3shp5halNr/JBohaAlOLESTMmTJ5V4Z6gsW3o+W5cBKVgsK0eQUrEAcY0PjWrO797YrcW28G8CsOJJEqSc+XKMqYWN27+0D30RxCVGFBGSlLSnXDIATrpFBG7q8cUti+bc+tIklBTGIgdpCTw7qI15Chm2Xtu4cBxPFWFJMjDmQBqB40/WZJQknXCJPl4Ur7L3MbZBDcpCu1KsRjumI0psbTAA5COFVJpvgcU0irtXQUBuWxRzaxgJoJcLrmyK2aR6C+xkx+Ae81W3l7bI/SJ/0ms2e1WG5xvIT1U5FWeh4DOhW3NusrWhTZWvBMwhQkkRquBW6IZR3i7A86ANhP0e6MHtNj2miO07tbwADeEDipUn1D51SbYIStBUMKyCod40z4V048sYxpmMsbcrJt3kiXoH2EDXvFN6NqIaMY0AnnE/OkttKEzChnketr4551Il9A+0geBTNY5Z75WjSENqo6O++srSW3U4DGQKfPXOrOy0HBx7SuA+8a5o1dAEKCsxpxogdt3Kvzrx8Av+UVmkWx52jsrpShRmUExpxEGg91uY044HFthShpK1Ac9AaWlbRuDqbk+CHv9tazcKz6O5Pihz4imnJdCaT7GxvdVpAOBDaDMzJJB55mrtjs9pklRdSVEQSVD3TSKbO5I/w7xPeAP4lCmTddLqPq3bUpScw4ejMHkYUT58PccvsOF0Mibxrg4g+EH3UK3YCofKkFOJ9RTIiU4EQc+Ez6qJuXTacitA8VAVIy8lYlKgoTEgyKpKhNlW7SSoADh8aQt5dxbu5uVuIeDaDhgZTkhIMmeYNPt3dobXKzAKYGRPHuFbN7SQoSlLigeIQY9ZinYjnmz/RrcIUCu6CgOGfvijydxkntOR+qD8TTIraB4NL8y2Peuqt1twIjEgDEYEutD3KM+Ak0WAD/APLxg6vO+WEe8GrDW4FoNS6rxWB/CBRZW1Dztx4v/JNRK2v/AOtaj99SvlS3JBRCzudZJ/NE+K3D/NUjW6lgnS0Y80JUfWqa0XthPG7YHghR/mqFe3GRrfJ/db+YNP1PmG35BhnZzKMkMtpjTChI9wqxFLf9t25/4t0/qo+SK8dpMH7V4vwQ7/KBS3r3ChiNak0svXTagQm3viYMEtvEA8DCiJoNfbLfeBQ0y82oHEkqMEpgZEqPW62LyI0osdD0t9A1UkeYqBe0Ghq6j8QpBd3b2k8EYmEoKRhMLaTiz1OFWdR2no/vcZKy2EkyZcJPqA+NU0TY9Obatxq8j1z7qHbQ3lZGSFpKjxOQHkdTXMdrFTDy2SYUkwYOUjKRxzqQLKUhSokTChmRIjP11G73CxlTtdK3FFRkAAlRJ4mPVp66jaubtxwFKEBqRJJ1T6pml/ZTfSL6yzhmSADiIHcK6G2kQI0jjrXdp3ceODly9kGGvVPhr1dVmNCw76Q1oaaMoC4OJJAUk5yDkZBjga3tvSU2WSHQMUz1E4dFTAB7uNc+Uw0VlDhmMukRGo5hUZUx2Ox9njCpVxcLgAgJaSBPHUmRXiJfM9Kxr2Nv3bFbrrkJkykdUqAiCSe+NKOsb6W6xKELUOfVFIruzdlKMkXJPcltM+VELc2KQEpF1A4S2KYxsO+CODKvxCtTvhyZHmv5Cl1Ltl/l3J8XEj3VMl2y/wAh4+Lx+BotDLW0tuuOkaJA4DP2mo2rOxUgdKX1qjrStevgDEVqh2z/AOXV5vK+dTIuLT/lU+bijStIDVTGzUQOhd/Gv/dW4csP+UWfEk+9VWb5Qdb6QICQmE5KmPZn66ksL1tCQOhbJjNRkk0nJ2CRVFxZjSwHmB8az/adsNLFoeSPlRZF2hRA6BrPuPwqvcbvB0uKbJSQsgD7MDhzqHKfgaSKg3gbGlq0PV8BXjvUr7LDfroXf7MdaMLSR36g+dB7+9SyElWLMwIANZrJkbobjGhrTvU//lNj1n41Gre57k2PI/OhW1QWQgOJILmmmkTw8KWTvNa59ZzLLs1pP1L4EtvkeDvW/wA0fhrU71XH3x5IFL7biVM9MMRThxAaGKAPb0tpE9CvX7wqF6rH8I9q3nuP80+SU1EreG4P55fsFKD+8TSENqU2v6xOIAEZZxzqTZe3m3neiS2oGDmTll4GisgXEajtC5Vn9IXHiacNznVqYJWsqPSESTJ7KMs6VNj7MU4hxQIARwM+OVNG5I/u5/aq9ya2h2mSyfbKZUPD4mlpq3ZW5cl9wtNs9H1sQCeunjIyzj10z7V7Y/V+JpM3hTFrtI8zbj2oq8v3bKwR35FH3aX1LJe2ONbzF4KJ/hTVZO09jpUorclIMIA6ZRIgSowkQZkRnkO81zCK6l6NNlsOWhU4y2tXSqEqQlRiEZSRXNim5ypJHranQYdPDfJyfjx/B47zbDHBZ/cd+JrH/jHZA0tlH/pJ/mVWHd5sIVh2O6AAc+iIAA4yG9ONBvRruw2/ieeGJDZCEoOilwFEkcQARlxnuq3dpRr9iFpsEccsmSLSX/ZO/wBkHWt97I/ktnOrHNLLZ9oJrRz0mMIMCxcSeSsCD6or28G/ard9TDDKCls4VEyATxCQmIA0nxyo+01b7TtErW3ksEfptrBKThVHAg+I4Z1at8RfP5Gbx48ajPJie1+d3IDtfSW46rCzYLWqJhKyTHOEo0q2N6dqK7OyiB+k5HsIFAPRvZlq/ebVqhtaD34XECfZTZvavaAW0LJJIIOPJvIyMObh5TpShucbbf6FZoYYZvThGPV22/5Ae0t9NpsjE5YJbT94hakjxUlUCgF5v3curbWWmMTZJQcK+qSIJ7eeVdPXdhq3CrxTYOABwapUqOslIPanSK4r0InIQOAOoHKpy7o+TfRRw5U92NKvPNMYD6QtoH7TQ8Gx8Savbt733rt2yhx0FCl4VJCECQQeITOscaVEs0T3dRhumD/6yP4gKhSlfZ1ZNPhUHUV0/BDvtt5Sb25YWhKkpdOEwCcwlQz1GtB2tpI0Q4pJOZH2dK39IycG1rkqgjEhQBmDLLfEaZ0EvsK3ApHVQRkcpHEjLWK65cnytUMLrb9upDjau0kEqSoE/pQD6qc9jbypeWGiheKAMcdVRzzHIZa0oW28NmlgNhtwrT1RHKM1+PdkKZ9y3WVkuBOAqAQnErNRAkgCI9VdWL4eEYz57GnDXqnKK9XRuMqOTubNs1wYcGf3k5+sUc2dbWyilCQeA7SfDlQvZtjbEJRcBzCNFIIB8xHupqt9zLVID1spayCFAyDB8Egad9cEoOB2RaZi+2Q00rDhUo+IHwqmVMpyKI8VD/bVu3x5BxRUrErNWsSYoFtXZSHXCoqUDplH9HwNRC5eSnSCzb7H3R+IfKrKXWRqkDxUPlWN3/R7bKZQtS3ZmdUga/dwxw11o1e7gWzq8alOTAGRSAInuz10OVNp+4AtFyxr1fxD5VaD7QgEJBOkq1qRn0Z2aRGJ0+aBrrkEwfMURvtyLZ4pxlyEpwwFAcjrE8Knb8xldT7arYqSU4cYmDIy1zrZF+yE4/q8P3sRj1zFSL2E3btJYQVFK3ZMxPW10AFXHN0bcshnr4UnFkRORnlFJodlZrbNuFpSVshRIgYs8zllNE9lqnpDl+VVwJ41zbb2zG7Yoeth1UmUpJJUkgyZCsznVA783gCiiQJKjAEZnM6TFZt8jOxqSDkQkjlhNcz9J1ghDrCUAAEyRwmeXCh2yvSfcBSQ6MYOsZHxyq5vttVNw7arRxAkESQcQyz400J9BL0g/lLcckn2INcbLOSojX512/e0/Xo/YOexuuFY/q1KynGBoORNaolnTrNEWA/ZfCuebRT1B411G42a61s9JUnIsghQzGaZ8q5ZtR1UADmOA5HupJcgy5toQ1a/sv5qsbnf4weCqh224robXn0Q4DnVncxSvpmemFXKnQHYt1x9RceHwNE9zB/dz+0V7k0P3Y/w9x4fA0R3Q/w//UV8KiC6KZNtTtj9X4mlDeYf3O/73GR/7dN+1O2PD4mlLecf3O777hof6GjVZfuG2k/54/mv8nLwiuuei1P9yP7ZX8KKTd0t3E3bi0KWUBKMUgAk5gRmcqarbdZtCiwztNxDgzLaVAEGAZwJUDpHlFc+GLT3JHt/1HLjyR9JumqfTYu3e/V4sLQQyEkFJ6hmDI1xaxRX0YbVQ2F2y1BJUvGgnIElISUzz6oI5yaF3W6y2rpq3cUCHFCHEjUEwTB4jl7aYXfR8yntXRTP3kpE+tVVFZN1+xnmelWL01xu54XsVt5Nw3nbhbrKkYXFYiFEgpJ10BkTn50yWaWtm2aEOLBwgnkVrUSohKddT5DWlrblgu1aSWr91crw4QsgAYSZ6qzyjzq1s/csPtNvLuFlS0JUZTiIkTGIqk1a4b2rk58j3Y4+rP4F8nbooej9wrv3HFarbcUfEuIVHto5vxte4t1s9CvCCFFQKQQqCiJkTGZ0ilXamzHLR4oClDLqrSSnEk+B7sxzFHd4t1+hZW8u6WvBEBemagDmpRjX2VMXJRaNMkcTzRyN8NUlX6DQ5btXtsMQBS4iQdShRGo5EH3VyZ21UhRQoQpJKSORBg+2nDd/YPTW6HU3biAqeqicIhRGUKA4e2rS9ykkybhZJ4lEk+ZXVSi5pOjPBlx6eUouXF9U+BFDVW9miHmjycQf9QpnvNzcCFrDx6qSqC3rAJjtd1cztttulaDIAxpJgcMQ5zWMlsas7seWOeL2PoKel1rDfukRKkIJmJ7OER+E0i2TQcWAomDOkDh36U+emhH/AOSSTobdHsW6D8KUxtNsBAQwgYDJJzKsozrp5Pm6RWOBolJAUdCQZGfIjI06bnbStkrC1pWpXZQAnqIIE5Dn30l3NyXCVaEZxwjwqa22y6kiScIMxMT6qpSkuhbYvs6xsfeYlTgfEJnqKAJH6uQ5V6kC03xLYhLIH7yj8a9T9XKP08QSb76MbE2qWVgycPEDiKAhVbIczrskrRzp8jvdXIW5jSZBBI9VBHVdY1NZviB3Iqip3OuXCuzWbGfZW13mMKVpJRGQOWXMGnSyug4gKSMjzoLsq9YfaSghJKUgYTrlyoq4jAyoIhMJOHkDHeaJjRexVsk1xO93v2gAoB04RJxCJiaH2+/91hgvLKtBw9es1jv+Qzsm8DpBbiJLg14ZGpW7l4/aH4R31y7Y+9TpW0m4WFysKkfZyI62eRpys94mgpaCsK4pjWI7J75pbiqJ73ZyFIJUhJAJMARmBPA0IQthONIYkAKSQROWELI176NL2kAypUp4yNT5AUtbQ2qWypxKEklS+f3UCctKltDorp2Fs/EfqSCCr7SvsxP2v0hRUbHtVLQOiJwkkEKORSpI+9zIpdc2+C0SUpS4SqY/SUM+Y0FWt2trdI6EmDiOukFTiSTHlSU1Yhm3iLf0iFpmGiAZOihCh2hS63uXs8gp6EjrEx0itU5HPH30T3xIN0oZ/k4y7ymoMRTjMHV7+JArWxUNF7b47YMEJLYQE4R2oGQE4taUn9x7VfatXdRouOHc5w0om3tHCs69peX6qAaLsXjapzSDAiT9opkDOlYUK9/ubalCMbDkISkDrnIE5A9fM1Hs3d6zacxobWFdcSVkjqxiyx0d2iEpZxY0BWBEEGRkqdY0J40nvbZSlCukAn60SkyfrOOmlS8iXYUdE2YwhDD2DQpz80yNTyNb7pf4f99XwpZ3U3mZdafQMXZAkxhGFATr3kUw7ln+7f8AUX76qLAt7TPWHh86U9vGba6H/wC22P8A+dlXxpq2mev5fOkzfFZRZXCgYKr1v/4zQ+FVk+4zfRq88fzJ/Rq3Dzv7IfxCmK3t7I3zigT9KT1lAlUDqJTIGh6pSPOubbm3d+yVvtWrj6VjDJxYcjJwnjyyrJur5F+b36C8CTm2EOEFOAIKcYSeQOlYQyJRXH0PUz6eU802pJce65fsxn2ztBR2ow27AKVo6MJkgpKpxTGpI9lMG919ZIQg3k4SohEBZ60Z9jPSufbZ3icduba4XYPNqYVJHWONMggSWxBBn10WuvSLbKEPWSyBwWG1AeS4qlNc2/3Mp6fI/Taj0uaa+gI3q2vYBCDY5qKjjnpMkxl2++nvZt84NlIcSQFJtMYy0UG5HtFc73o3lsH2Chi16JzEk48DSchqMSDOfhRix32tU7PFsek6QW5a7IKSrAU64tJ7qmM0pPldGmfDOeKCUXxLzy6D21G0bW2eFtGHACUZwUuAdZs9x080mre/hnZz55oSf9aDXNNxt5fob3XJ6FyA4BJwngsDmOMajwFOG9e+Vi/ZvNNvErUiEgtuCTiB1KY4c6cckZQb8mWTS5ceaMYpuKdr5XRysmvoTYZm2Y/Yt/wJr56rtu728lmLZhKrpkKSy2FArSCCEJBBBOoNZ6V1dnR/VoSlGNLyzjNw8rGsYldpQ1PM1AlUEHkZ9VS3pHSOQZGNUEaEYjBquvQ+Fcz7PUivhHf00tKN3bqSkmbfgJ0Wr/dXPm7BwgnDpXSvS1dKSqxWn7VurOYGRa159quaqvFycznr4c69Ftnx/F8njarTiBSdKyNnuRMe2rlvtMEQeCcjGfgedat7STmSFZjuy/8Aqp3S9hrb5KDluoapNYq87dggFJGZzBJEcs4r1VvfsFRGRrd65UYhA8T8qIW25jxzLrSfxf7akLjuhXl/XI1qtonion9YxVPJH+8y49gsxumr7d4gZRkDp6xWf7MsUZKeeUR91KoPhlQZLX3irzVlVxhlP3o/eV8qjfFdSHaCbNzs5syC/IzzJFGP/FLbjfRoaeWFDCR3RzzoNbNs8Xj7aINLaGjyvWke+luv8RSo5pvDsp1jFIKUrOQJ60cBGsUIOzHQErLawNZ0y585rrW1dm29wUla806dZPyoTtXdAPABF3hHIgKnl9oVK4KW3yJVzjDfYJgziOSoP2dczNDbN24U5KUrkHXSPM0+X+4Tq4wXTYIH3D7IVVk7oXQbwJeaJw4ZwqHnMGnRacbFm12nctSuSomZE4geelYttv8ASEpWAVHMTIic8u8/CjJ3Kvw2EpUzIEEhZGIeada0Y3M2ghs4UtdJi1xAymOZGVS4uhNoWr65WCsnMHLPXX3Vf3Ne+uQkhQClA4sz1QQSO7PiKZrfZV+kIBtGTA65xIViMROZ9lZtrPaXSJKmMIAPXSpGR5AJOSe6hcEJWwjvltllD/SdtOAAgSDwyngcqEN75Wjsp+juycWjg+0oKJ05gUI2vYbTWTitnVmZmAfjpRlDDjFs0oW6w5hIWOhJIJMwAnPz0p7mVKl0FV7eYUrrWz4MKzxI+0ACczyFWW9pWpM4XRJCtUcEYQNeVJl/tZ8pAbsXgoZYi2vMeBTrWfpb4cBLD+CEz9WZHPhFJyYKvJNvLtHDCWlOJSAB1lAnu7h4UvXzy1p6ykzGuWfdAph29dpddSg2zhBSBiwQE5a9UQfODS67YNFzoRjGYKiVGMI4CorkSjYx+itxK1utLUIwkpTp1gMjHH4V07cof3URn9Yv31xNO0GrYlLPVIBSqVGfWDXW/RU6FbNbUBEuO8SfzqxMnwreDtiktvAa2p2/L50l+kGRYH9K9T7LePhTptPt+VKu8irS5b+iOXRZcQ6HfyLixm3AEiE6KnWqypuDSNdJOMM0ZS6TGDc7/A237FHuoxXOtnbAuGU4bbbDQRPZUAkSeQWVRNEG7Tbg7N1aPctJPqbA9tKOSkk0a5MEJzco5I8vza/0Os1gikxV1t5GtpbuD9Ege90e6sHebaiPymylGPuKV/KlVV6i83+xH2Sf4XF/+kN67VtXabQfFIPvFVndiWqu1bMnxbR8qVv/ADAWn8rs65R5E/xITWzfpOs5hbb6D3pQfcufZS9SA/supXSf6P8AgOr3UsT/AMIx5IA91QL3J2ef+GSPArHuVVVn0h7OV+eUnxbc+ANXmt8LBWl215kp/iAp3jfsDWqj/d9Siv0ebPP5pQ8HXPiqq6/RrYnTph+/PvBpkY2zbL7NwyrwcQfjVxDgOhB8CD7qPTg/CJ+06iP4n9RGc9F1qdHnx+A/y0g737uLsnQ2pYWlacSFRBImCCOBHxrvMVyz0xqHTW4kSG1SOIBUmCfGD6qxzYoKFpHdoNXmnmUZO0U/SyMVpsxep6Ej1oZPwrnCUKJ5jurqW+pbVszZinATKQkQdD0Q/wBtJFohiYSSec8KpzrweZkVTa+bF5czpHCt24g4jnwjTzozc2ySkkAyTqDlHhxrUbMAMAgyMiocY7qN6IARcivVdu2wggFI8ZMGsVaA6A2uT/3qYJPlVE2IOs/iI+NbnZ4PA+aj8687bEmi2I+9nWwQOfsqsNnNxJJ8lK9815u2bGhWcvvKI99PbEdFkRzBNZM8BUEAdmR+8fgawhqftOHwUfnR8IyylhXHKs9GnPrGqgYJ+/P6yvnUirTmoj94n2zNK0HBIXUp0JnxqQXS+BX6zVZNsgauKM8Mz7ZrCkoAgYvDEfnSsRdF44PtrHgTW4v3h+dX6zQpbciJVHcSPbNRlqNSr8ajSv5isMjab3B5XrNSJ208PzpP9eFBMGWiz+8oD2176Oo6SP3zTt+4Ww2N53E/nh5x8q3G+SwJDqFeAFL1xswKHXUeWs/GhFxspgKwIcUVckjEfUJNaRd+WFscH/SG4OyEGO4it7T0jD861A5pJPvFKLe5t6oEpZVh4KXCP9Mz7KuW+4rik4nHgnuhQ/1EV1Ri/cfI/wCzN+bJ5QTjKSchiEAnlNF3dosgwUjx6ke01y5rc3CZQtkkaHpRPqNWbjZN02MSnCoD7q8XurVQXuPczpamrYiVNteYQaK7NDfRjogkIzgJAAmTOQ764e+pw69OPIx7a6v6PSfoDUqKus5mdfyq++ntoLsvbT7fl86pu7YtmB9aQkgFRMZxOvfqKvbS7fl865Jvra9JePdbCEpRmrMZoRoOB+VEmq5CPY47x7/WbQSAkO4geGScuqSCNDSBf71BSyUoSEzqkYY54RQq52SAjFjCwASrOAB9kgED40LDqMGHConnl7qz4Y3aGm83wcUSpBU1KRkhakgAcQUkamqzG920j+SvHgJ0JCjnoJWDNKIcKFA4ZAM4VTB7j3VaZ246FhZhULxYNEzOQgcKe1roSZ0F/wBIW0mg2lSwFD8p0jaVGJ7WFIECK2u/SdeNLKHW7V3PI9GoYhqDGMxSRtDajilFazKlGSJyHIQM/Kg7joUZ09tEU12Ozop9JjCzD2ybZY5iJ9RbPvomxtzZDqcS9mYBhJ6ihw1EAprkyUqGhGXeKKWW1nB1TCsiADCRnkcx/WVElwUsuSPUn+4/F/d9Yzau254jGsf6VLrcbJ2GoYkX77Q/SSpInxU2PfSPs26cjoyEqSkzIOY46CMQEVm7vVOZFEZySrJBMQMvs6VnSvo1Wszr8TOgsbCtj/h9vgcpcj2BwVC76N3nSVIv7d4nVRUok+cqmua27qUq+sJIMgQZA5H11UuhPWOAmeAz8csqeyL7Rcdfmj0/ojrHpR2eu32RZNLwlTToQojMfk3YIJA5CuWNOpiVTly1rRdypQAKlEDQEmPVpNVHVZ1pRySk5Ntl1zaJywSkRznPnWzN/GufmaGJVwqTM0bUIuqdCjwHdwrNVAK9RQHUi/3DwkVou45DTlUDThxROUVi4Eaf1nXnDJgVHU+z41lcjjPnVdSzz41J9meM1IrJcXOY7sq3Q8mcsz7aHpdKu0Z/rlWq3CAYyoCwn9OURGnnn7KiU9P9fKhzKApQBzFXw0ACIooVni5OUeusdGeceVQoWQSO6qe0X1AgBRgiTnTUbYgoqBrmarvXyE9pafWJoTYOF15LaySnkCU+1MGus7v7t2jSEqRboCo7RGJX4lSa3jgvtjSsQrNVw6YYt3Vj70YUfiVrRux3RvFmXXG2hyT9Yr15AU9qPCtZrVYoIraA7Hc+1R28Tx165yn9UQKN21o02IbbSj9VIHuFbg16tEkiiO5s0OCFCfMj3ULd3YZP23R4OLj1TRms0xCy7uYyrVx0+KgfhXmt1y3+SuHk+JSR7RTPUF+shBI1othQl326l0olX0pJH6cgewRTpuY3hs2xjQuCuVN9gnpV6eGh7wa5/fXrilKlajGmeXqroG5iybNonXr/APuLqMeXe6ET7R7flXL95rhab50Y+ooISpCc1wUJz0MCa6ftPt+QpK24wkOOLCRiUUpJ4lOAZVeZ1AErYA2s4m3wOOFRcMYR1COjAyJGecxqKS9vrTjAShSVASuSYUVdaQkgYRnoKu723CkuuBKiBAT5RpS2VHIznU4+gL9iSVAFeEE5nWPKj17u8gDF0pOHU4RBPPLT20vWz6kjKPNKT7xTVa3CugJmISmIAGpz0oyNrouNVQPY2A2tKVrcJJnsxz1mNKkO6jQAKi51pgiMGX6RFFnEShJzmAMiRx5Cq1u4UrcQD1ZGWvAc6z3yasXDfBWa2FZgzC1BAlYLgTpqBlrProS65b5/VYgeOPMd0QJq5vVlgAyBSCQOckzS0oVeNtq2Sg8lLZgwEAQQnMkjmCOHMa1oEIl0lK8OfUxQAOGRzoQ2opEjU+fvohb3S1IXJnqK5TmRxoaCrIrdwEYEIThHW6xCSD4nXTStLjEAMpjQgajkaHOVKm6XATiMDICdKtxEzzjk/wBRUBz5VOcxJ51o4NKpAjVtIy1HM1KpoTkqawNa2TrTGWkoSBAUD3nKvVTrNOhH/9k="
              style={{ height: 500, width: "100%", overflow: "hidden" }}
            />
          </Card>

          <div className="row">
            <div className="col-4">
              <Card.Img
                style={{ height: 150, width: "100%", overflow: "hidden" }}
                variant="top"
                src="https://i.imgur.com/7DySqBX.png"
              />
            </div>
            <div className="col-4">
              <Card.Img
                style={{ height: 150, width: "100%", overflow: "hidden" }}
                variant="top"
                src="https://i.imgur.com/7DySqBX.png"
              />
            </div>
            <div className="col-4">
              <Card.Img
                style={{ height: 150, width: "100%", overflow: "hidden" }}
                variant="top"
                src="https://i.imgur.com/7DySqBX.png"
              />
            </div>
          </div>
        </div>

        <div className="col-4">
          <Card className="my-5 py-2 rounded">
            <div className="col-12 text-center">
              <h3 className="text-center c-cz">Price: Rs. 10000</h3>
            </div>
          </Card>
          <div className="">
            <Card className="my-5 ">
              <div className="container " style={{ height: "auto" }}>
                <div className="row">
                  <div className="container py-5 ">
                    <h4 class="p-3  bg-cz text-white text-center rounded">
                      <i class="fa fa-phone"></i>{" "}
                      <a href="tel:03073794329" className="text-white">
                        03073794329
                      </a>
                    </h4>
                    <h4 class="p-3  bg-cz text-white text-center rounded">
                      <i class="fa fa-envelope mr5"></i>{" "}
                      <a
                        href="mailto:harismehmmood112@gmail.com"
                        className="text-white"
                      >
                        Send Message
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="">
            <Card className="mt-5 Safety-card">
              <div className="container " style={{ height: "auto" }}>
                <div className="row">
                  <div className="container py-5 ">
                    <h4 class="p-3  bg-cz text-white text-center">
                      Seller Info
                    </h4>
                  </div>
                </div>
                <div className="container row mt-0">
                  <div className="col-4">
                    <b>Name</b>
                  </div>
                  <div className="col-8">
                    <p class="text-primary">Haris mehmood</p>
                  </div>
                </div>
                <div className="container row mt-0">
                  <div className="col-4">
                    <b>Address</b>
                  </div>
                  <div className="col-8">
                    <p class="text-primary">
                      Sector 4, street # 2 near civic center
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="mb-5">
            <Card className="mt-5 rounded">
              <div className="container">
                <div className="row">
                  <div className="container py-5 ">
                    <h4 class="p-3  bg-cz text-white text-center rounded">
                      Safety tips for transaction
                    </h4>
                    <ol>
                      <li>Use a safe location to meet seller</li>
                      <li>Avoid cash transactions</li>
                      <li>Beware of unrealistic offers</li>
                    </ol>
                    {/* <div class="clearfix">
      <a href="/safety-guide" class="pull-right" target="_blank">Learn More</a>
    </div> */}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdDetail;
