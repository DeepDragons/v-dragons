let tdClassPink = 'text-lightviolet';
let tdClassWarning = 'text-warning';
let tdClassRed = 'text-danger';


export default {
  data() {
    return {
      tableShow: false,
      stat: {
        fight: {
          fields: {
            fightWin: {
              tdClass: tdClassPink
            },
            fightLose: {
              tdClass: tdClassPink
            },
            fightToDeathWin: {
              tdClass: tdClassPink
            },
            mutagenFight: {
              tdClass: tdClassPink
            }
          },
          items: []
        },
        lab: {
          fields: {
            mutagenFace: {
              tdClassPink: tdClassPink
            },
            genLabFace: {
              tdClassPink: tdClassPink
            },
            genLabFight: {
              tdClassPink: tdClassPink
            }
          },
          items: []
        }
      },
      watcherFight: {
        fields: {
          ownerWiner: {
            tdClass: tdClassPink
          },
          ownerLose: {
            tdClass: tdClassPink
          },
          dragonWiner: {
            tdClass: tdClassPink
          },
          dragonLose: {
            tdClass: tdClassPink
          }
        }
      },
      gensTable: {
        fields: [
          {
            key: 'attack',
            label: 'Attacking gene',
            tdClass: tdClassRed
          },
          {
            key: 'protect',
            label: 'Protecting gene',
            tdClass: tdClassWarning
          },
        ],
        items: []
      }
    }
  }
}