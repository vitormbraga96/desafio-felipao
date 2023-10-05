var jogadores = {
    jogador1: {
      nome: 'Neymar',
      xp: 4000
    },
     jogador2: {
      nome: 'Ronaldinho Gaucho',
      xp: 1500
    },
     jogador3: {
      nome: 'Zico',
      xp: 9500
    },
     jogador4: {
      nome: 'Ronaldo Fenomeno',
      xp: 7500
    },
     jogador5: {
      nome: 'Romário',
      xp: 6500
    },
     jogador6: {
      nome: 'Pelé',
      xp: 15000
    },
     jogador7: {
      nome: 'Garrincha',
      xp: 8500
    },
     jogador8: {
      nome: 'Junior',
      xp: 900
    },
}

for (var jogador in jogadores) {
  if (jogadores.hasOwnProperty(jogador)) {
    var xp = jogadores[jogador].xp;

    if (xp < 1000) {
      console.log('O jogador de nome ' + jogadores[jogador].nome + ' esta no nivel de Ferro');
    } else if (xp >= 1001 && xp < 2000) {
      console.log('O jogador de nome ' + jogadores[jogador].nome + ' esta no nivel de Bronze');
      } else if (xp >= 2001 && xp < 5000) {
      console.log('O jogador de nome ' + jogadores[jogador].nome + ' esta no nivel de Prata');
      } else if (xp >= 6001 && xp < 7000) {
      console.log('O jogador de nome ' + jogadores[jogador].nome + ' esta no nivel de Ouro');
      } else if (xp >= 7001 && xp < 8000) {
      console.log('O jogador de nome ' + jogadores[jogador].nome + ' esta no nivel de Platina');
      } else if (xp >= 8001 && xp < 9000) {
      console.log('O jogador de nome ' + jogadores[jogador].nome + ' esta no nivel de Ascendente');
      } else if (xp >= 9001 && xp < 10000) {
      console.log('O jogador de nome ' + jogadores[jogador].nome + ' esta no nivel de Imortal');
    } else {
      console.log('O jogador de nome ' + jogadores[jogador].nome + ' esta no nivel de Radiante');
    }
  }
}