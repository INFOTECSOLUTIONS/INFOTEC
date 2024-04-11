function redirectToWhatsApp() {
    window.location.href = 'https://wa.link/mz36v0';
  }
  
  window.onload = function() {
    const profileContainer = document.getElementById('profileContainer');
  
    const profiles = [
      {
        name: 'João Victor Aparecido',
        bio: 'Desenvolvedor / Tecnico',
        skills: ['HTML', 'CSS', 'C#', 'ASP NET', 'Flutter', 'Sql Server','Projetos de Sistemas T.I']
      },
      {
        name: '*****',
        bio: 'Desenvolvedor Web Full Stack / Mobile.',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB','Flutter','C#']
      }
      // Adicione mais perfis conforme necessário
    ];
  
    profiles.forEach(profile => {
      const profileDiv = document.createElement('div');
      profileDiv.classList.add('profile');
  
      const profileImg = document.createElement('Img');
      profileImg.src = 'IMG/fotoperfil.jpg'; // Caminho da imagem do perfil
      profileImg.alt = 'Foto do Perfil';
  
      const profileInfo = document.createElement('div');
      profileInfo.classList.add('profile-info');
  
      const profileName = document.createElement('h3');
      profileName.textContent = profile.name;
  
      const profileBio = document.createElement('p');
      profileBio.textContent = profile.bio;
  
      const profileSkills = document.createElement('ul');
      profileSkills.classList.add('skills');
  
      profile.skills.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.textContent = skill;
        profileSkills.appendChild(skillItem);
      });
  
      profileInfo.appendChild(profileName);
      profileInfo.appendChild(profileBio);
      profileInfo.appendChild(profileSkills);
  
      profileDiv.appendChild(profileImg);
      profileDiv.appendChild(profileInfo);
  
      profileContainer.appendChild(profileDiv);
    });
  }
  
