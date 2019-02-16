let tdClass = 'text-pink';

export default {
  data() {
    return {
      tableShow: false,
      stat: {
        fight: {
          fields: {
            fightWin: {
              tdClass: tdClass
            },
            fightLose: {
              tdClass: tdClass
            },
            fightToDeathWin: {
              tdClass: tdClass
            },
            mutagenFight: {
              tdClass: tdClass
            }
          },
          items: []
        },
        lab: {
          fields: {
            mutagenFace: {
              tdClass: tdClass
            },
            genLabFace: {
              tdClass: tdClass
            },
            genLabFight: {
              tdClass: tdClass
            }
          },
          items: []
        }
      },
      watcherFight: {
        fields: {
          ownerWiner: {
            tdClass: tdClass
          },
          ownerLose: {
            tdClass: tdClass
          },
          dragonWiner: {
            tdClass: tdClass
          },
          dragonLose: {
            tdClass: tdClass
          }
        }
      }
    }
  }
}