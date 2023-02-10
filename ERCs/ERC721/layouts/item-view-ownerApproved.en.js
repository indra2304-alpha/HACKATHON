//<![CDATA[
class Token {

    constructor(data) {
        this.props = data;
        this.setConfirm();
    }

    setConfirm() {
        window.onConfirm = function() {
            window.close();
        }
    }

    render() {
        return`
        <div class="ui container">
          <div class="ui segment">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAASygAwAEAAAAAQAAAJYAAAAAunEs9AAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAMKxJREFUeAHt3Qn8ddX0P/ATIRkqaRQepaiUUsmQehAZkmhQhmgSIeolQvGokIjSIJIhmZpeqQwNaFBR0YDQ5ElJSSmR2f//fe9a39/pdu/93vl772Ot1+vec+85e1h77b0/e+21195nof83RVVSSiAlkBKYAAk8YAJ4TBZTAimBlECRQAJWNoSUQEpgYiSQgDUxVZWMpgRSAglY2QZSAimBiZFAAtbEVFUymhJICSRgZRtICaQEJkYCCVgTU1XJaEogJZCAlW0gJZASmBgJJGBNTFUloymBlEACVraBlEBKYGIkkIA1MVWVjKYEUgIJWNkGUgIpgYmRQALWxFRVMpoSSAkkYGUbSAmkBCZGAglYE1NVyWhKICWQgJVtICWQEpgYCSRgTUxVJaMpgZRAAla2gZRASmBiJJCANTFVlYymBFICCVjZBlICKYGJkUAC1sRUVTKaEuhMAv/+97+r//znP50FnrBQCVgTVmHJbkqglQT++9//lkfnn39+dc4555Tfca9VnEm7v/CkMZz8pgRSAveXgLf1PeABD6juuuuu6uyzz65++MMfVuuuu271yEc+svJsoYUWun+kCbyTGtYEVlqynBJoJQFAZUp41llnVSeddFIJtiC9ejQBq1XN5/2UwIRIwLSPBnX99ddXP/nJT6pFF1202mCDDartt9++uu6664rmtaBMDROwJqRRJpspgWYSiKkgrer73/9+9eAHP7hMASPsZz7zmfLfdHFBoAWjFAtCTWQZUgI9SCCme5dddlk1f/78apFFFqloU3//+9+ruXPnVgceeGB17rnnlpQXBC0rAauHRpJRUgLjIIHQru68886yKviIRzxi2p3BFPHuu++u1lhjjWq//farhKFlBcCNA/+98JCA1YvUMk5KYIwkwND+17/+tXrgAx94H67+9a9/VUsuuWT1ve99rzrxxBPLswSs+4go/6QEUgKjkEAY2k0DL7nkkuK+0OgsSsv6y1/+UgzwO+64Y3XNNddMvAE+NaxRtK7MIyUwQAnEVDAM7Q95yENaTvWEDa3qyCOPLPatSTbAJ2ANsCFlUimBUUggAOjSSy8trgxhaG+WNy3rb3/7WzHAH3TQQRPvAZ+A1ayW815KYEwlENrVHXfcUcCHJ3vjVLDOuvBhgF9zzTWrefPmVeJOqgE+Aateu/k7JTAhEmBopzk1GtpbsW/6uMQSSxQXhxNOOKFVsLG/n4A19lWUDKYE7pFAGNp/85vfVD/96U+ruhvDTDKqG+B33nnn6qqrriqa16T5ZiVgzVTT+TwlMAYSiKkgVwVuCo0e7Z2wKI0AvU9/+tNlKjlpU8MErE5qOsOkBGZZAsAG0axuuOGGaY/2btiiZfGA32ijjaqDDz64nOogfqTdTVqzFTYBa7Ykn/mmBDqUQGhXf/rTn4oNaiZDe7tkgRYn06c+9anFAC/NSdKyErDa1W4+SwmMkQTOO++8oiH160dlVXHxxRcvZ2Ydd9xxY1TCmVlJwJpZRhkiJTBrEgibk2Ni+F0xtPdrKA8D/HOe85zqTW96U/XrX/96YgzwCViz1hQz45RAewnEVJCh3dEx7RxE26fU/ClN62EPe1h1+OGHT4wBPgGreV3m3ZTArEsgjOEO5WNob7cFpxdmGeDXW2+96tBDDy2AKI3Is5f0RhEnAWsUUs48UgJdSiC0q9tvv71vQ3urrMMAv9Zaa1X77LNPddttt429AT4Bq1Vt5v2UwBhIwOF7//jHPwqQDIMd00Krjj/+8Y+rb3zjG8PIYqBpJmANVJyZWEqgfwmEod1xMJdffvlADO2tuKob4N/ylrdUv/zlL8faAJ+A1aom835KYBYkEFPBf/7zn0MxtDcrEtCiaVmBPOyww8pbd8bVNysBq1kN5r2UwCxLgKH9d7/73cAN7a2KxQC/zjrrVEcccUTZ+iPcOBrgE7Ba1WDeTwmMWAIAgrbD+M12tdhii7U9OmaQ7IUBfu2116723nvv6o9//ONYGuATsAZZ65lWSqAPCQANBKz4XsX/PpLsKmpMCx25/PWvf72ruKMKnIA1KklnPimBNhII7/Wrr766GNof/vCH9+3R3ia7po8ApDPgN9xww+ptb3tb9Ytf/GLsDPAJWE2rLm+mBEYngTC0c1/g0f7Qhz505GAVpQVaDvt79KMfXRxKaXrjZIBPwIqaymtKYJYlYCr2+9//fmSG9lbFZYB/ylOeUnlr9FlnnVWCjYsBPgGrVa3l/ZTACCQQhnZGbqcx9HN0zKDYpWU5guZpT3tatddee1W33nrr2GhZCViDquVMJyXQgwTCsH7OOeeUqVj87yGpgUZhgGdHu+KKK6qvfvWrA027n8QSsPqRXsZNCfQhgTC0O97lZz/7WQGIuNdHsgOJCjjDAP+Od7yj+vnPfz4WBviFB1K6FokMU/itDjHrJ88Y3eLaolh93TYFCHuAfOp5tXvWSab9lL2T9Bv5nSlOq/LU70ujVV3OlH43z+t5jiK/mXjDDz7YixjaF1100VkztLfiVX0zui+zzDLVIYccUo6hibPk6+22Vfxh3B8qYM1GwxhEntG4u+2g7SoImOCtXZqNz8RpvNcuj0GUvV36npENntrRTGVtVqaI0y7dXp5FXYbse0ljmHEuvvji6pZbbikngJqGjRsB1NVWW6363Oc+V22++ebVS1/60o7awLDKsdBUhd5zuv2Ac4DM1FyVoIFGQ2/MLp5F9vX/8ds1SMO27GsVo34/nvMdocp6X1tjXhHGtTFtI5xjY338Duq3I0W5Iz2rQDa1+jjj6K677iq84NdINmfOnOqJT3xiteKKK07z0Y6HSF/DIu+QSdyPfONavx+/G6/1sH7r7Pa2Pf7xj6+WX3756bqMcHGVDgoebC0x3bn22mtLWb1HDznX6TGPeUwp55Oe9KTqcY97XLnfGL/c7OFLOj51ALdUb2MvcHje8553n2c9ZNFXFLyREWP20Ucf3dMbcJoxIF3tiMH8lFNOme57zcJ2c48cpX333XdXP/jBD6qll166aIN1+XaTXj9hB65hRWXwKbE3aRi08cYbV9/97nenQSk6iLwOOOCA6thjj+052+c+97nV85///PJmEaskAV5Rrm4SrgON420d3/HRj360oyQ22GCDcnytEQ2Iyh/Vy1pP6M4776ye/vSn128N/PdJJ51UveIVr2gKWHX5GDSOOeaY6sADD+yIBzaSHXfcsQxCItTT6iiBe+OEjHSkkNNNN91Ujk458cQTq6985SvlwLoLLrigAFYv+XTKT7twwVsY2gd9MF+7vHt5RulwMim3CzLcfffdp+XbS3r9xBk4YAUzKuWFL3xhpXGssMIK5Uwf81/LttGwouIizkxX8X/1q19Vq666asugNAC0xhprTGtaOry8mjVQ9wALjdAbRIwgPuhZz3pWtf/++1dArFX8ErDJV4CV5WqvVPrQhz5UQj3qUY8qGsWDHvSgMmIBGqO/nfI+Otuf//zn8oIAb/fVmL2H7tnPfnaJ36wMHhhZqe4aFl7l3yuJT0ulteGH/GzGxXMzirIqx1FHHVXtuuuuJdiyyy5bNCnPaVt/+MMfyn3alWdkTuMhHx/Tjh122KErWZOHTx2kyM/q1re//e3qIx/5yH1YppnPJoWstGOGbLId9FQwZDKocmoPtDYe8HvssUcZ0L32PsoyqHw6SWdogCVzKqSGr7ESot+DoCuvvLJlMjoNAhQ+OkU3tMoqq5TOrxEBW9MHjf6d73xntfDCCzcFvcb0oyJNh5785CeXx9JV8aZFl112WWOU6uabb77PPVMlJA3a1te+9rVqm222KWncJ+C9f+TZTi7N4sx0D7g68XKllVYqQYFMIwVYkPN73vOe6qCDDqrw7v4dd9xRgE4c0wjaIvrWt75V2oTfpr4GGR13p512KvntueeeHYMWmfqod9tazj777GIcpuUhZeC1jT9vTDa1nS0KWQ3T0B55AHBtYlBExmRosDG4eBFraIaejYqGClhRCJoD1XzLLbestt9++54FGQ2TlhZCimvkFVfgQsDrrrtu9d73vrfYCVRgY3jAZETGH8c9nQmxq+Bbh9IRpeUY2cb4kV9cA6y8CjzASocHVGxWSDqmnY997GOntSrPgYNR15lEF154YWkcOrJGsu222xbb3ctf/vKmIxuZXHTRRTPyF3y2uuKfjfCMM84oIL3yyisXIHjVq15VOUoXNZOBRgysjLzAN7SpI488skyv2eekiwxk3gJDo+JNTdbA1kkB73rXu4oGvemmm7YcHHTK4CGmfMcff3wB9ZLB1Jf37iH5qAv5jwupJ/IZlHZFHoiW7cMcA5j1ARTPy58+vgCtgfcLX/hCMQ287GUva1lHfWTTNupIACvsQKuvvnr1kpe8pC1Dg3oY0xegwO7SCbGlaNyf+tSnSmd6whOeUDai6qjvf//7i/3jRS96UVPAkH6Mbo4HMSVFtAegCKwAtqmhSm9Gps46vNUYzno777xzmU7jCei5z3AMCAMYo+N6o4oXCgyKPvvZz5akou5oPzpA5Oth/AaugMZ0a/78+WUAAD7eeWcBoZHwSvMxmAjnVVNkTSsy7dcRyFCYOjhJJ/7rPOyB8+bNm06eZmdKTLN2UmeQMuB1Nin4BlTnn3/+QDzaI80AJgOvdqaNmNUARPKI58L3Q7Q2syTtjB3LldYd7aCftDuNOxLH0RBUqOM6sEL285mpgJGnvDRu1C5f4am4gMaoT1swhdCRAAbSKVWYiov0y4OGL4CnrEBGY9GJ3/72t1df/vKXC1iJG2X3Oz5xTwcDEIz0N954Y9HEaCXIooJy4KGRIn6v15hOO9+blscmpuNbfHjGM55RsguAxDMexOGjg2iINFHEQA+sQuZRxri6j3bZZZfqfe97X5G1aeOcqVVS9KMf/ahchW9GNFJgRVbrr79+4dX02avcf/vb3xY7mumhqTzZOVtqNinkxtCufuJ/LzyFTLQt6ZA7G6PZAbmRDQKOgMtz7VHYfvKVpnoz4Fj5jcWtftOUbqd0/1bfacwewkUno7b63c+nm+wj33b5EbqGEGBA2zJ9BVoqyOjNbSBG7mg0wUc0QquB++67b9GCNBSdh1b54Q9/uKQjfXkFL37HJ+5JC2299dbFyGlaIz+a2Ze+9KXSKT2PcH6jiN/rNUbiOAsptFQ2pTjuBK8oys9uBFhNnclJZ/F/zhTwKGvUdZQxru57jt74xjeWq04Vg0sAVuRXAtS+lPGZz3xmASMAa0pJA2XrM0AA3I022qjYr0SLstSSGNnPqCeaDy2S1hP3umGCzMlDWfw29abdnnbaaaVdkgmtimwRbVU47RBwcaMI+baS60z8iBcGeO2CPda9XsozU17Nno8UsJoxME73CD46ksp/61vfWtgzOrMLICMZaqxw4ZHlfEQ9Z1dCH/vYx4omEB243GzzJa1oADQtxP4TWtZ3vvOdcq+Rh3Kzx6/IT6dijwJANBZk4QE1yw+II3ILG503CqOQSfnT5Cs6lmn7m9/85qIRxD0dO7SCJlFLR9RZacDACR+A0sIEf7Gg0PgCYOP+qK7yJQdAbvW52+mp+D5kD6hotNdff31FU7MKasAwULC3Im0syhpX8cTXJgGXlVltKdLtVhbSUjfq7ZOf/OT0W30iv27T6yZ8AlYTaUVHY3Bml6FlxXRJh46KjgqKzk4T0tlVpDQ0rA984ANluiJsdMYmWd7vVvBAq3rd615XeIh8Pv/5z5cVOA0neLhfAl3ekBbir4RoVEZj0z1TtShzeTj1FeHJBrE3AYc3vOEN01pNeTDDV6TLvolCy6M96BSoWRl1QoskRnhve1FPNAoyCjmJG3z6PZtECzRFC61nJl6U2UebIRN1AZzOPPPM6vTTTy+LRECKtiZcvcyNaYf8pOMDrCxWkDHHZXHJqRtZqRsmDwN0DKCRT2P+g/yfgNVEmlFxGgP7CAqwAUKhbTVG5ViHjHjR8TbbbLNyr5fK1JDk+4IXvKCkwcDJnoQHjQ31km6JWPuKBitdK5gWCkwjULgiNOYTMgoXDR0SKXtMWSJMedDiK9IVD0UcHTtAux41nqsb7h60WPz7SEucZvHqaYzqN37wq664yOA1psGteAh5BLgAFCvHHKVpaFxFllhiiSLnKHertBrvS9tHm1JHQJC2BbzCHxC/IePG+PX/wrDnclZmPrGDg9zxNExaeJiJT3raKkXHQFGJ1OrGRhcdhKMn0hBMjyyt09JQxC9/uvwykiEG5SBbe8JtIu71e2ULQfyWOF46C0neGnmUsTEPLh+O09XBaFg6E+q0vBEuprsxMMi3EcQa89Y5xG/FW2P4Uf+Pspm+kaH/rs0onpOjchkwaK+0KsCgHZKtZ43tr1l67e4FD+RG3mYP7FvAkNZGuzZgoAjbLD28MFUY6Gha7373uzuu92bpdXIvAauNlFSIxoKi4kx9QnuK+xqiESo6fHQ62okGEI2xJNTFVzR40x0jdOQLGLhAoAjTRbL3CYo3Ddd0hc0OSABcxOiP2vHPDaMfwj85A0gUsrNkji/PWgFSq/v98DOouME3W5wFAWDTCDTRppQjAJ82ZgXOB5AAKoZ06TXGHwSvUbehFQNKbRloabtWztVR8FrP030DjcUNg5uZgBlAlL0edlC/RwpYUegQ0qAKMeh0gj/qeDiSRmOhMalEFJ3NNUZE9p4YncJbPdLrls9oKKYSVsQaqdd06+lEGmwjiCuCKchrXvOaaV8yfLQijbOROgWSaNgMwZxIl1pqqenpdkzFG9OehP9kSgY6s2lcrLAG754jYQA0EwP3FdoUbcV9xvloX9H2Iv4wrsFTAJeZhA/A1P4MZPiKcHUe8G+h4xOf+ESpR2GFa9du6vG7+T1SwArGmhU6ns10HYYQGvPUQIx4XBTM8a2YqSzE0RFFZyt/pr6MSkhDC1puueXiZ89X5SWvRpm5368spKlceJ83b17hMToHlw4yaCxnY0FCLo33u/lvtQuZilrU4J7ABwz1W8aSyCx9setxYg2P9qhDIKVcYfy2GhtnudNqELlH+FGyH3mGNo9HswztGm+uoQVHWAb4J0yt1toY/cpXvrJ8PBtG3Y0EsILxKGg/jXxYgtAopK2hqCwboW30RNT02EfXTNMRxmiElFEayMg6CCK/kOEg0os0QpZW29jEgITpC+2m0VE04gzqGkBo6sPTHVgFmZrSUiNM3J+Ea8i0bmg3tVN/AQI0d/55gIpHPxCIaV+0ndkuq3Ig7dmHmQB4mV3QuGheUR7hgJp2Y+O7tmPhZhj1NxLAis5sS4Jl8qiUTjohwREMg6BTE6wMRaMgqE4o8hMvKqIeLwDBVeUwQFr5sAJGSwI81PV5U1pIKyN0rBxKI/KjXo8rkYOBQ0PkmV8nQK1BDqPBySfyNjLzckdsPLQrflRsIqiT9lECjtEXnpXPVNDVf+2XLMNsMAxD+rBEoAxIW9E3WhnohTPImJFwbrYYM4z6GwlgcZozr3UUrE+vxP+oU8AKYRGyvFE7zU6DMtpR41/96lcX/xSbjsXRwFAcm1L+NHxFxdZvt8uvHm42fkdnUl72K/Y2gIEMDChkWP4M6KsuJ1ugOHuym+kIiFtFdPBxll8zcQTAM7TTnmiNBgTTwlEa0pvxNoh70WbCztVooJfH3Llzy2EDDPD2ioZMBpG/NEYCWECDGmwObHWr3mhnKoiw1GUdK3b7zxTH83A6tA/wiCOOmPYNqsfVIdlsaG+WkGPDrzCMiPJzbhHSmRmFu6mAbspZMhnRF76AgbIbBBCQcP/QQw/tupzdsB15s1vttttuBay0D1PSL37xi2Va2o2Mu8l7mGGjXADKFNsgOX9qixDgmi1D+rDKq6wogKtuoNem9B17cdWnKaTwgxr8RgJYGqDCAa0YxXsRZky7OolrxNYRjHY8oTsh4edM7YEzJdTI0CabbFLO/mFUnMSO1Kzc0YDsi+Q/Y+XTaInCUbRZvH7vacxkzMFWPuwcSKe2Bem1r31t+T+oxl0SG/EXB09bhth0tPUwVmND+4nOPmK2hpJdlMVgh9i4KAhcXexHdYCnxZtB0kgAi30CCjOmmtuquG4oNKFYQemkQUccCK9D0iiio9bzdg8/1HarZUZFHct+OPzyVDdaLihgpewx1Yr3zWlwVqnYkwAzmUSYuqz6+R1gpUGHj5W6oVktueSS5ZBEYDapco72ZrHGqRyAivmCOYS230mb7Ue+sxk3+hBbLzNKbFwPrX2QZR8JYIXxGXDFqNqrgJuBTqu0dDpaGb+imYiwNSz88Ylx8FwsrXfSieodPCpIvHGjKAuthtru8LzYIOy8LtSNjDspX4CVLSDhm2a/Jf8rRCNh74lwnaQ5jmEALo3CcdbMC+TLDYazsRMOFkSKwU2/iX7mFAeb2Q1+g6aR7CVUKKRBIp2ml083HSmWxZ3syQ7FRhWGz7ga3W2hcWY6FZ7rQgBP+AZFBy+Mt/myqobq4QMI2kQb+aMAU+dVIXyTw3bbbdeRo2i3DJOHjkzz4F+F+LUZSAwQXnNFA45w3aY/buG1URvWvYDDSqGTTrUv2iRNPfrCuPHdCz/6s4GGrRdYeTmM7WnKHiaUXtJtF2ckGlYwEJ0lQCHuD+OqkyDTyBjVW+VjIcDWAofjGflpHUYJ51jRsuog1CqNmK6yncWcnjF/EKSRNzZ0sgx5dppHlIMPkGOjLSLEIPKGqVMWBj0li/xMi/haBTgBcn5KVoyHsZLUqTyGEU6dhKZoxYyGdfLJJ1chXyuwDPNk0G39DYPfXtJUr+GLxUaMOI06vjsG7pBBL+m3izMSDasdA8N6Fh2ccDUQ5HfjJ5bTva0FAdPQjBy0H/fKjyZf0eisZCK2usg7pjxNonV8S1rywFf9417k03Fi9wYM7dFUhU3JFCa2wkR5uk2zMTze8KvhAkfHJdM83Gcn9N48nVd9CLcgkLKgAH5ld5ba61//+nK2PPvtWWedNb1Xb1CyHpXs1J2ysVOpQ2Dl+CQDIFcgYKXM5CCc8CGTQfG4YLSUGaQRHaJZxw/DoGmJM8KtDrK5+e9guDAgziR49jmvBaNVhUuFDb3RcWdgseljcfHMGc9xtCeccEI5r8rKHhXcM2E6oeDDCij7QixJi8tJlpFYGQfRiYJvaZseOCMstFzTT2WZjRcY4GeYpJ0ZAEx//dZpowObIu23335lEzvgNk30fFKmidoGjVz7cFii9yTQmOfNm1dmJZ4rqzIpO7MLR/Hoe4OS+/8EYM0krOj03kyDAI5Gh7ziy3+Cj3Dlwb1fARpGl+fdezJnhAN4nFFR3Ls3WkeXiGMkc4jfVlttVV5kYcQ2pUIRZqYEI5yOgtiRdC40d+7cch0UWJXEpr68o5B25RgcacuP1mpjddAg8oy0ZvMa8mUHNbDYh6oT68DKqDMjW7t4gnOY1anPnjp33oJPfQCZzXI05o1v0z+2OLZg7Y790wqz6TwSJgDa9N8x1Y6aiZM8QjaNaffyPwFrSmqErXGxX1kdVClsUkZCU5fo5K0EH/dpWMioCRBQHJsSYcrNDr+iM4fvmqM74vVVNMBOSd7KaLpqlK8Tp1qGU+WP/OrPu/0tL+k4udRZ7WTov8YO/NmyUITrNv1xDa+MZKhz8z+iReq4FnU8A1ye69wGN0f3eN2Xs/61L8f7aHPC9tJWBi0XvFq4Yt91kq42aAbC/YV2pY0ri3DKhjh3M62YHgpLFp4r06AoAeteSYZQ7TZHXBv4ZiFTJp29nZYlXJzkoPFxokOmbypN3G4oOrR02H8QtwDOnhYD4j17wXe7tKMDWMGxudn0THnQi1/84nZRu3oW5WRM5yJhGqTcGrs3DvmgQTfirpgcYuBoHzy9t9hiizJ1AlycSaP9BHCRATBg1/KeADZE9i1keh51NkR2myYtX7zRFPFs+mcFWbtTf+57DqyURZnZs9iybHrmMMpGas+tcN22+6ZM1W5214tqERe0nzo+AZunW/FgeGeUJnhTGZoWataQxHVfZVppZMeyjG2PHPXfiZNIJXdKeEGmFueee25JK7YmAQMjnDAzARa+NBpuBIcffnhJEx9GSvv25syZU3jvt2FJUxq82LmSkAUZ0Kx23HHH8iYhz4fRiEuhxuwLAJkSqR8ycd6Xq0UecnA/2gPN2b5Kq4l2g3CHoIXRcJq1t2EVFT9ssfqAgY3G5zw4vCsLXqKegRVA4yRrYLKB3iCqTXl3J5qpbfZSjpECVgjfNX73wvSw4oSAbRsxpWMgjvOM2JBMFaPTNfIQ5fGGZCQtWhpi26IdqWQNNsKWhw1fnmkUwtKujFyILSxWNAFCpxR5MZDWRz7x646inabXLFzwyxmVFzvS8IGVpW5Gd+D1vwBW6l051Z9tXdoLG5V6OPXUU0sH5xMonDDCkp8BiKxoWd5EQ0u1+gY0pBH12Ez+/d7Dg/xpfNq8erSnlHZFm2dfwyMKng2iprW0L7tCVl111bJ66LjskIHroGmkgBUFcI3fgy5QP+nhSeVZitbJkFEjXsLJJoGa8R5ANmdKY/ni1KbP+VNqMtAzWiEGfaBlVTLykVf9o1F6plEw9HtLNPuGhoQP9hCGfH5iwspzJgq+vF48iE2CrcHRy6iTdCJu4xX/+OXCEWfMm3KaBkrf6KzDAltlw3e3n8Y8x/1/yNyWI9qGBRz1DsSt+NJKgJf9m8IGCJClemaCABbiAjCyo3ENmtQDcoSSwVWeVpANNLal4R9QxYCk/pxcwqDuCCBxXPFvtwINXntXjn7aVLtyztzi28Xu8lkIqLHBRjL153Evru2eRZhBXFUK4rXLTyiWqdklnBNlBBJGpTRSxLUKBhCo1SrdsclGJP4rAMhKigpt/IhvKspeQKNjkAVWRjiNyDTDCmGnFDwy/DuVwfQ2yMgo/wgT97u5RsPU8eLtQPIwQtMCTW0Y9FEAtTJ2++mGp3EJGx3WVGqdddaZthma5jFGO2vt6KOPLh09VqHFAQ7aOrA3zWL/IjsaFy2Iphp9oZ+yAkEmD4OxVWjTUm3TgGjAkUcAFUBSx1Z9LaJ8/OMfr+bOnVtsbXg4e2ql0+ING5Z4UfZ++GsVdySe7uHxbT5s3turwDX0EKTObMTy3/1BkbR0RPaivffee3p7BZBBKs0KSLNKibgaWLzqXqfV+DRUIxIgNEVk3Ne5YyXFKGwKoGHGthm2gbADydtSOG0lgMK9dhQ8hmZIVrQrjS2mbr3KTlrSJxfTAG/0YbOjRSJAqxw2lJNHtyRt9hwdybRk0PXcLT+9hA+egbe6NcUnC0BgqucKkGg2Bkcrv3Vty0BlWsl94Pjjjy/aj8EPCJJ7aK3d8BZ5Ayr5Ilow80DMJIQhf7zIQxueN+Vv5UUocR6dfqxt8ls0NexmIO2G38aw3bekxhTa/I8Oo1PomDQHn0FQ4/J8Y5qEjYKHxuft/kcnNjdnkwIU1GYjD0dIp2JaEWwGHPJzn+e7DmuLjwah/Lb5SBso+bQi9gCNlc2MvYMnOr8XU8FmeTZLJ8JR4WNvlwaGAEw4ivYiH2lEZ+SIijcjr07pPq3KYoNPv6SeAVavFHUZ7SH+95peN/HkpR5M59hFrRhrB2QEFJBB12BloQcQaXNhRhAX0dK5gwA1m6q97AGQi9vppmp5koHFkPomZemGC07wFLKieZnm8Z1ba621yvTPnlukbMLNnzJ9AN1+21NJtIOvoQJWbIkJ9wD8NK58RAOKDhA8N/53n9ajgqB+Kwqhh1ZH3ZZWNxQNDWjsvvvuBbCka6qDAAA7hNGyGZ910FLZtCogZ4qIaB86tfj18isXAAi/K2HFd05UN5qVeJEuJ0ZkRAZ+aBBHEEf60bjDCVX6cW5Z2EAirGedEJnSJKTZr+0mOj1tDcW2q074GEQYbUF5aMtzpzRb2orBLNqpq3ZmMNE+lJk/Hw04VoWFkU4MmHYJ8Gk744wzqg033LDUtb7WSs7ik6c2AKxo+Pvuu28ZCJWRjPAYdckth1bOlkbrwrd+R4byEBbwmgryt8OXNHod/LqR81ABy0gxZ8oIba7cDmQ6ZZhApaNDtKqcqGQjPtI4WoVtl28I35tt+Z8AKY1Iw+Jrwjipsai8ZumLrxKBEi3N6Eir+uY3v1nixwpiMx4AFP8owMLuhbppEMETIz1PczYUfNPY2LIASTfpNeOx8Z48dAzp9kv4B9AoOlGvaYZWqR1aGDAVmy2iKRs0uJSEWwpelJfsgLPf2klME2nlZBBh/AYg9U3VAE9bAVr1fua39i9d2hJqt0lZvwKCDgIAnrQ9aZj+aeM++KBNASuzhziBo1kfKBkO+GuhKQa6Uz86ZECyUHlIyZdKCFCpsyRPlR8CdFVh8b8edqbfeBePllYfwdzXcDoZ/YX1CV6N8EYwH1MBvCKaJ2AH8qF9uS8u6oV/POM94kpLYwOigyL8h5PsoNKMdPCLVzz3SnjT6UIGrr22h155EC8GCPVu0GicadTT1rbUG96tvAKjeGWcdMhFGAQApbf//vuX44GsMrIbGqy0pbBTcY/hD2c3B4o+Eu2Sv58XxJjGG3zISF9qJPmKC8QsJIUjaaTTGH7Q/4cGWINmdLbS0ziisffDg3R8Oq3Y0FQ6Dd8Pbxl3NBII0AIOnETZoGLAauRAm1P3ARpW4HxikKwDjnZlk77VO3ZTU8r5U7YlCyC20dCyY99fI+DROpk3eNwDMwtBjYN+8CafmAoCKxpYlCnCDPs6VMBSwGFRKxBplmersJ3y1ixNcXtNN8CoWf7S7DXdZuk18j7ItCO/xjzi/qCu/fDcjLd+0htUmQCLaVqsFrZKF2gpA/sRgDMdtOoc97Wl0LYAjZV4p57SztiXLFiYfiIgF2E9F5a/Fa2PeYNWV9fI6zzhAa92bXBsZd9yb9SyHCpg1Qucv1MCKYH/W10FQKZyAAKINAPWuryEYU6wSsf9wTQxpneNWhPtSvh4XtfGpBnaGEDj22d6CuzagQ87mcUzNjX7I4FXAla9hvJ3SmABlUBMo7icMILXVw3bFRmg0KzCB8sikOmfaRpqBKZmQGbHgxVCPnNWqwGgcO3AStrsiF5fZpVx9dVXH/lUEA8oNax75JDfKYGRSiC0E97lgKBT0MIk0EK0NKuptC3HDlmgkG58YvrHQG512u4GFCuKNLaZgAqY4Y07htVxK94BuCWxEX8lYI1Y4JldSoAEArCABodS/ndcMIBBpwSQrIACrjlTbhvsW/y9gqTlSCG7Qk4//fRyeKA47FczAZU08Eiz4uHu3Z4cVgMUO4kffAzymoA1SGlmWimBLiQQmgq/LFM1xnEg0Q0BDhoXFxZ+VPyzGNCd7mF/H5AxheMqw04lz07BRrrC2sHgtA9TyOC5Gx4HGTYBa5DSzLRSAl1KIAAAIJx22mltXR3aJR3TxDCe2yHBZYHWxebVyfSvnj7gDBcG01be8cFrPdyof98zGR51rplfSiAlUCQQQMOAzl2BETxsT92ICJgwulu989sKIYM8+1XdcbaTNIGVdHiz2+gPrFDw2kkawwqTgDUsyWa6KYEOJRDTQGfBsxl1CzD1bICVaZyraWIvIMPNgW8WfnbZZZeSvPTGgRKwxqEWkof/aQkEwNho7FQHWlYvQFMXYoBgXOvP2v0WHmDZgG//LJ6AVb/8tMuzm2cJWN1IK8OmBIYkAYAALJx84FVg9gP2MjXshz35s1vZdmPlkquEe+MCVsqWgNVPDWfclMAQJMBQblOxVb9RgQVgctKJgxi9ni3eTTCE4vWVZAJWX+LLyCmBwUkgpob8sUwNreyNimhzjPaM9DZLmxaGPWxUPHSSTwJWJ1LKMCmBEUkgpoZ8nhyt7CDKYU8NAROPeXsMnR7q/QXjZLeqiz4Bqy6N/J0SGAMJ0LSQ42Sch8W3alhTQ1NBLgy23thj6Ax5FDyUP2P0lYA1RpWRrKQEQgKABGh41Vds2RkGiDiFwUGSzray/QaN41Qw5JKAFZLIa0pgjCQAnACHM7Acl822NAwtCxg6ldQZV068HdepYFRNAlZIIq8pgTGTQNiz7AX0bgGgNSh7FmAyFeTC4K1OjkUeNxeGZtWRgNVMKnkvJTBmErA9xgbmVieCdsNuuDB4C5T3CXrx76RQAtak1FTy+T8pgZga8pHi6tDujVGdCiimlk6J2Geffabf4DMMG1mnPHUaLgGrU0lluJTALEkgpobcDbwurh9Xh1gVdMbVqaeeWl46Me52q7rYE7Dq0sjfKYExl4BtO443dghfaEqdsgysvHWHC8Pee+9dNDZxJ0GzijImYIUk8poSGGMJABWAw+hu1dDJnzSjbogLg9NJveZ+t912mz7VIQGrGylm2JRASqAjCQAWIMX4zj+rm1XDMLRfdtll1eGHH15esjpJU8EQUGpYIYm8pgQmQAIxDVxzzTWLpkRjaufqEJpZHMjn2GQe9AAs0pqAYk+zmIA1LYr8kRKYDAkAG7TxxhsXx9J2rg7Ccg71SnsnMHBjmGRKwJrk2kve/yclEFNDBnRvdnZmeyttSVjPvEjigx/8YDnR1FTQ/WETsAxwrV/r97vlIQGrW4ll+JTAGEgACOn4K664YnnPIFcHhvg6ASZTwfPPP7+8tt7hgKOwWwU4AcUAxvo17vcCXPctYb20+TslkBKYCAlssMEG1fyp19PfdNNNxW0B08DAkTFcGPbcc89q8803L2UJ4BhGweQZYMTtwqvt47hnJ044rx5xgl1yySULmPrfDYimhkViSSmBCZQAcNDZaVZcHfwP7YYhHmjQqvbYY48yLRR2WIAVYOXFF1dddVUBUG4UXuy6yiqrlA3W3uSz0korFVAFrs6Nt2gQ2mInVZCA1YmUMkxKYEwloLMDomWWWaacZRVnwcdxx0cddVQ5brkbLabbogZY3XLLLdUVV1xRXXjhhdXKK69cLbfcckWbwiPfL8Z/J5kutdRSBUivvPLK6tJLL61uuOGG+4Btu/wTsNpJJ5+lBCZAAgABAQXuDozwZ0+9U/Dggw8u51wBlAgz6OKE1nb99ddX9iY6VWLdddetbr311vtkhS8aV2iAwI0/mbdUmy7Stuoa4n0i1/7km59rwsifKYFJlUBoOTr/QQcdVI47Pu6444odK54NumyR7m233VZWIddee+2ShQ3aJ510UnXjjTdWiy++eLXFFlvc76ytiBtXgMXGNdPxzKlhDboWM72UwCxIIOxZXB0Y2A844IACVqEBDYMleXrp60UXXVQFWHmRxV577VXsat6+Y9/jlltuOb33EUChRlvaqquuWl199dXTBxVGuEa+c5WwUSL5PyUwoRIw7dPRTb+Q38OaCkob6FidBFKnnHJKtdlmm1WXX355MapvtdVWhQenSyy99NIlTLnR8BXAdc455xQDvPSC/4ag5W8CVjOp5L2UwIRKAACEdhJgMIyiSNtryJwHv+mmm1amhYgta7311iu/AZlwTkxFAXLlT+2LFuhlGxYOAJ49kl7o2ix8TglrgsufKYEFQQJAYphgFYAIpNioEL8qxJ2CDQvFyqRpo08rnmiBwAoxxDca7MuDe78SsOrSyN8pgZRAxxLgQxVARZtCa6yxRsXYD9SsCqJ58+ZVN998c/ktXAAeQKv/FsCLMKxytqKcEraSTN5PCaQE2kqAZhTaE80K+HAU3Xrrrct5W1YHveSC1mQFUNj69qGwr4nntykm7azt6RNTge8x27dlLR+mBFICKYF7JBBTvWuuuaa65JJLqjlz5pQja+ryue6666prr722Wn755SsrgIcddli10047Vbfffnt17LHHlunisssuW2277bbFuVRc9ivOpMKvtdZaBQAbp5Hph1WXcv5OCaQEZpQAHQeQACSgw5Ui7olc/13/b1q43XbbFYdWm7ZPPvnk6uKLLy5+YxGHFgYIGeHjXp2hnBLWpZG/UwIpga4kwI4FsGhdMZUDZsDGJ8g9rg/2Na622mrl9jbbbFO888UNTYrjq/+tKI3urSST91MCKYG2ErBCyK0BBVhFBADELuUTYGTrDhsXCuO7jdH1MI7JcSROK0rAaiWZvJ8SSAk0lUAAkBU9x8cwlrM9OakB1TWregIM7nWXB+k4UcI00EtdXQGgzdEo8qmnkYBVl0b+TgmkBDqSQNiX2LCOOeaYAjxOYgiqg1b89oqy448/vgTh8sDfatdddy1TQNNAxvhFFlmkfCJOpBfXNLqHJPKaEkgJ9CSB8847r3KIII0I8JjitaJDDjmkeMWvv/761QknnFDtsMMO5UQJ4R1Ls84665QjaFrFT8BqJZm8nxJICbSVQGhZDOU2QM+dO3catEz9nMnVjLwQg9sD+5VD/ZD4c6bcI+w7jHSbxW0Nhc1C572UQEogJXCvBEKjskrIb8oGZhoWTckmZhTGdb8Bkf8M71415kgZ94DVCiusUMBK/Ga2K/FRAtY9csjvlEBKoAcJmP4BmSWWWKIc3nfBBRcU/yzaE7J6CICcLQ+sYjURyDG4n3nmmUXT4mA603RSejklJIWklEBKoC8J1KdxHES5MAClxRZbrGzL4SS6ySabFMDiuuBEBlt2aFYArR6/HSMJWO2kk89SAimBjiXQCDqAyRnzcd8V8bOikYVxPp53klECVidSyjApgZRAxxLoFIA6DVfPOAGrLo38nRJICQxMAqFRNUuwnWG9Wfi49/8B6vY4pF5iWXAAAAAASUVORK5CYII=">
            <span><bold><h3>Gave approval to move tokenId: ${this.props.token.tokenId} ${this.props.token.symbol} to ${this.props.card.to}</h3></bold></span>
          </div>
        </div>
`;
    }
}

web3.tokens.dataChanged = (oldTokens, updatedTokens, tokenIdCard) => {
    const currentTokenInstance = web3.tokens.data.currentInstance;
    document.getElementById(tokenIdCard).innerHTML = new Token(currentTokenInstance).render();
};
//]]>
