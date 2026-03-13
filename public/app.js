function buildPage() {
  var bootLines = document.getElementById('boot-lines');
  bootLines.innerHTML = CONFIG.bootLines.map(function(line) {
    return '<span class="' + line.css + '">' + line.text + '</span>';
  }).join('');

  document.getElementById('loading-title').textContent = 'MacOSski';
  document.getElementById('loading-subtitle').textContent = 'Get to know me.';

  var aboutPhoto = document.getElementById('about-photo');
  if (CONFIG.photo) {
    aboutPhoto.innerHTML = '<img src="' + CONFIG.photo + '" alt="Photo" style="width:80px;height:80px;border-radius:50%;object-fit:cover;border:2px solid #c0c0c0;">';
  }
  document.getElementById('about-name').textContent = CONFIG.name;
  document.getElementById('about-title').textContent = CONFIG.title;
  document.getElementById('about-text').innerHTML = CONFIG.aboutMe;
  document.getElementById('about-links').innerHTML = buildAboutLinks();

  document.getElementById('cv-content').innerHTML = buildCVContent();
  document.getElementById('skills-content').innerHTML = buildSkillBars();
  document.getElementById('explorer-sidebar').innerHTML = buildExplorerSidebar();
  showProject('all', null);
  document.getElementById('start-menu-links').innerHTML = buildStartMenuLinks();
}

function buildAboutLinks() {
  var links = [];
  if (CONFIG.github)   links.push('<a href="'+CONFIG.github+'" target="_blank" style="color:#00007c;margin-right:12px;">GitHub</a>');
  if (CONFIG.linkedin) links.push('<a href="'+CONFIG.linkedin+'" target="_blank" style="color:#00007c;margin-right:12px;">LinkedIn</a>');
  if (CONFIG.website)  links.push('<a href="'+CONFIG.website+'" target="_blank" style="color:#00007c;">'+CONFIG.websiteLabel+'</a>');
  return links.join('');
}

function buildCVContent() {
  var h = '';
  h += '<h1>' + CONFIG.name + '</h1>';
  h += '<div class="contact-line">' + CONFIG.email + ' | ' + CONFIG.phone + '</div>';
  h += '<div class="contact-line">';
  if (CONFIG.linkedin) h += '<a href="'+CONFIG.linkedin+'" target="_blank" style="color:#304263;">LinkedIn</a> | ';
  if (CONFIG.github)   h += '<a href="'+CONFIG.github+'" target="_blank" style="color:#304263;">GitHub</a> | ';
  if (CONFIG.website)  h += '<a href="'+CONFIG.website+'" target="_blank" style="color:#304263;">'+CONFIG.websiteLabel+'</a>';
  h += '</div>';

  h += '<h2>Experience</h2>';
  CONFIG.experience.forEach(function(job) { h += buildEntry(job); });

  h += '<h2>Education</h2>';
  CONFIG.education.forEach(function(edu) { h += buildEntry(edu); });

  h += '<h2>Certifications</h2>';
  h += '<div class="section-entry"><ul>';
  CONFIG.certifications.forEach(function(cert) {
    h += '<li><b>' + cert.name + '</b> <span class="entry-date">' + cert.year + '</span></li>';
  });
  h += '</ul></div>';

  h += '<h2>Skills</h2>';
  h += '<div class="skills-grid">';
  CONFIG.skills.forEach(function(s) {
    if (s.tag) {
      h += '<span class="skill-tag ' + (s.tagStyle === 'beginner' ? 'beginner' : '') + '">' + s.tagLabel + '</span>';
    }
  });
  h += '</div>';

  h += '<h2>Languages</h2><ul>';
  CONFIG.languages.forEach(function(lang) {
    h += '<li><b>' + lang.name + '</b> - ' + lang.level + '</li>';
  });
  h += '</ul>';

  return h;
}

function buildEntry(item) {
  var cls = item.highlight ? 'section-entry highlight' : 'section-entry';
  var h = '<div class="' + cls + '">';
  h += '<span class="entry-date">' + item.date + '</span>';
  h += '<h3>' + item.title + '</h3>';
  if (item.subtitle) h += '<p class="entry-subtitle">' + item.subtitle + '</p>';
  if (item.bullets && item.bullets.length) {
    h += '<ul>';
    item.bullets.forEach(function(b) { h += '<li>' + b + '</li>'; });
    h += '</ul>';
  }
  h += '</div>';
  return h;
}

function buildSkillBars() {
  var categories = [];
  var seen = {};
  CONFIG.skills.forEach(function(s) {
    if (s.category === 'hidden') return;
    if (!seen[s.category]) {
      seen[s.category] = true;
      categories.push(s.category);
    }
  });

  var h = '';
  categories.forEach(function(cat) {
    h += '<h3>' + cat + '</h3>';
    CONFIG.skills.forEach(function(s) {
      if (s.category !== cat) return;
      h += '<div class="skill-bar-wrap">';
      h += '<div class="skill-bar-label">' + s.name + '</div>';
      h += '<div class="skill-bar-outer"><div class="skill-bar-inner ' + s.color + '" data-width="' + s.level + '"></div></div>';
      h += '</div>';
    });
  });
  return h;
}

function buildExplorerSidebar() {
  return CONFIG.projectFolders.map(function(f, i) {
    var cls = i === 0 ? 'tree-item active-tree' : 'tree-item';
    return '<div class="' + cls + '" onclick="showProject(\'' + f.key + '\',this)">' + f.label + '</div>';
  }).join('');
}

function buildStartMenuLinks() {
  var h = '';
  if (CONFIG.github) {
    h += '<div class="start-menu-item" onclick="window.open(\'' + CONFIG.github + '\',\'_blank\');closeStartMenu();"> GitHub</div>';
  }
  if (CONFIG.linkedin) {
    h += '<div class="start-menu-item" onclick="window.open(\'' + CONFIG.linkedin + '\',\'_blank\');closeStartMenu();"> LinkedIn</div>';
  }
  if (CONFIG.website) {
    h += '<div class="start-menu-item" onclick="window.open(\'' + CONFIG.website + '\',\'_blank\');closeStartMenu();"> ' + CONFIG.websiteLabel + '</div>';
  }
  return h;
}

(function() {
  buildPage();

  var bootScreen    = document.getElementById('boot-screen');
  var loadingScreen = document.getElementById('loading-screen');
  var desktop       = document.getElementById('desktop');
  var taskbar       = document.getElementById('taskbar');
  var lines         = document.querySelectorAll('#boot-lines span');

  var lineIndex = 0;
  function showNextLine() {
    if (lineIndex < lines.length) {
      lines[lineIndex].classList.add('visible');
      lineIndex++;
      setTimeout(showNextLine, 120 + Math.random() * 180);
    } else {
      setTimeout(function() {
        bootScreen.classList.add('hidden');
        setTimeout(startLoading, 600);
      }, 800);
    }
  }
  setTimeout(showNextLine, 500);

  function startLoading() {
    loadingScreen.style.display = 'flex';
    var bar = document.getElementById('loading-bar-inner');
    var progress = 0;
    var interval = setInterval(function() {
      progress += 2 + Math.random() * 5;
      if (progress >= 100) {
        progress = 100;
        bar.style.width = '100%';
        clearInterval(interval);
        setTimeout(function() {
          loadingScreen.classList.add('hidden');
          setTimeout(showDesktop, 500);
        }, 400);
      }
      bar.style.width = progress + '%';
    }, 80);
  }

  function showDesktop() {
    desktop.classList.add('visible');
    taskbar.classList.add('visible');
    updateClock();
    setInterval(updateClock, 30000);
    setTimeout(function() { openWindow('about-window'); }, 300);
    setTimeout(animateSkillBars, 500);
  }
})();

var topZ = 100;

var windowTitles = {
  'cv-window':       'CV.doc',
  'skills-window':   'My Computer',
  'explorer-window': 'Projects',
  'terminal-window': 'Terminal',
  'about-window':    'About Me',
};

function openWindow(id) {
  var win = document.getElementById(id);
  win.classList.add('open');
  win.style.display = 'flex';
  win.dataset.minimized = '';
  bringToFront(id);
  updateTaskbar();
  if (id === 'terminal-window') document.getElementById('terminal-input').focus();
  if (id === 'skills-window')   setTimeout(animateSkillBars, 100);
}

function closeWindow(id) {
  var win = document.getElementById(id);
  win.classList.remove('open', 'maximized');
  win.style.display = 'none';
  updateTaskbar();
  closeStartMenu();
}

function minimizeWindow(id) {
  var win = document.getElementById(id);
  win.style.display = 'none';
  win.dataset.minimized = 'true';
  updateTaskbar();
}

function restoreWindow(id) {
  var win = document.getElementById(id);
  win.style.display = 'flex';
  win.dataset.minimized = '';
  bringToFront(id);
  updateTaskbar();
}

function maximizeWindow(id) {
  document.getElementById(id).classList.toggle('maximized');
}

function bringToFront(id) {
  topZ++;
  document.getElementById(id).style.zIndex = topZ;
  document.querySelectorAll('.win95-window').forEach(function(w) {
    var tb = w.querySelector('.title-bar');
    if (w.id === id) tb.classList.remove('inactive');
    else tb.classList.add('inactive');
  });
  updateTaskbar();
}

var dragWin = null, dragOffX = 0, dragOffY = 0;

function startDrag(e, id) {
  var win = document.getElementById(id);
  if (win.classList.contains('maximized')) return;
  bringToFront(id);
  dragWin = win;
  dragOffX = e.clientX - win.offsetLeft;
  dragOffY = e.clientY - win.offsetTop;
  document.addEventListener('mousemove', onDrag);
  document.addEventListener('mouseup', stopDrag);
  e.preventDefault();
}

function onDrag(e) {
  if (!dragWin) return;
  dragWin.style.left = (e.clientX - dragOffX) + 'px';
  dragWin.style.top  = (e.clientY - dragOffY) + 'px';
}

function stopDrag() {
  dragWin = null;
  document.removeEventListener('mousemove', onDrag);
  document.removeEventListener('mouseup', stopDrag);
}

document.querySelectorAll('.win95-window').forEach(function(win) {
  win.addEventListener('mousedown', function() {
    if (win.classList.contains('open')) bringToFront(win.id);
  });
});

function updateTaskbar() {
  var container = document.getElementById('taskbar-items');
  container.innerHTML = '';
  document.querySelectorAll('.win95-window.open').forEach(function(win) {
    var id = win.id;
    var btn = document.createElement('div');
    btn.className = 'taskbar-item';
    if (win.dataset.minimized !== 'true' && parseInt(win.style.zIndex) === topZ) {
      btn.classList.add('active');
    }
    btn.textContent = windowTitles[id] || id;
    btn.onclick = function() {
      if (win.dataset.minimized === 'true') restoreWindow(id);
      else if (parseInt(win.style.zIndex) === topZ) minimizeWindow(id);
      else bringToFront(id);
    };
    container.appendChild(btn);
  });
}

function updateClock() {
  var now = new Date();
  var h = now.getHours().toString().padStart(2, '0');
  var m = now.getMinutes().toString().padStart(2, '0');
  document.getElementById('taskbar-clock').textContent = h + ':' + m;
}

function toggleStartMenu() {
  document.getElementById('start-menu').classList.toggle('open');
  document.getElementById('start-btn').classList.toggle('pressed');
}

function closeStartMenu() {
  document.getElementById('start-menu').classList.remove('open');
  document.getElementById('start-btn').classList.remove('pressed');
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('#start-menu') && !e.target.closest('#start-btn')) {
    closeStartMenu();
  }
});

function showProject(folderKey, clickedEl) {
  var container = document.getElementById('explorer-content');
  var items = CONFIG.projects.filter(function(p) {
    return p.folders.indexOf(folderKey) !== -1;
  });

  container.innerHTML = items.map(function(p) {
    return '<div class="explorer-item" ondblclick="window.open(\'' + p.url + '\',\'_blank\')">' +
      '<span class="exp-icon">' + p.icon + '</span>' +
      '<span class="exp-label">' + p.label + '</span></div>';
  }).join('');

  document.getElementById('explorer-status').textContent = items.length + ' object(s)';

  document.querySelectorAll('.explorer-sidebar .tree-item').forEach(function(t) {
    t.classList.remove('active-tree');
  });
  if (clickedEl) clickedEl.classList.add('active-tree');
}

var terminalOutput = document.getElementById('terminal-output');
var terminalInput  = document.getElementById('terminal-input');

var commands = {
  help: function() {
    return 'Available commands:\n' +
      '  <span class="highlight">help</span>      - Show this message\n' +
      '  <span class="highlight">whoami</span>    - About me\n' +
      '  <span class="highlight">skills</span>    - List technical skills\n' +
      '  <span class="highlight">contact</span>   - Contact information\n' +
      '  <span class="highlight">projects</span>  - List projects\n' +
      '  <span class="highlight">education</span> - Education history\n' +
      '  <span class="highlight">interests</span> - Hobbies & interests\n' +
      '  <span class="highlight">neofetch</span>  - System info\n' +
      '  <span class="highlight">cls</span>       - Clear screen\n' +
      '  <span class="highlight">exit</span>      - Close terminal';
  },

  whoami: function() {
    return '<span class="highlight">' + CONFIG.name + '</span>\n  ' + CONFIG.title;
  },

  skills: function() {
    var h = '';
    var cats = ['Intermediate', 'Beginner', 'Tools'];
    cats.forEach(function(cat) {
      var items = CONFIG.skills.filter(function(s) { return s.category === cat; });
      if (items.length) {
        h += '<span class="highlight">[' + cat + ']</span>\n  ';
        h += items.map(function(s) { return s.name; }).join(', ') + '\n\n';
      }
    });
    return h.trim();
  },

  contact: function() {
    var h = 'Email:    ' + CONFIG.email + '\n  Phone:    ' + CONFIG.phone;
    if (CONFIG.github)   h += '\n  GitHub:   <a href="'+CONFIG.github+'" target="_blank" style="color:#0f0;">'+CONFIG.github.replace('https://', '')+'</a>';
    if (CONFIG.linkedin) h += '\n  LinkedIn: <a href="'+CONFIG.linkedin+'" target="_blank" style="color:#0f0;">'+CONFIG.linkedin.replace('https://www.', '')+'</a>';
    if (CONFIG.website)  h += '\n  '+CONFIG.websiteLabel+':  <a href="'+CONFIG.website+'" target="_blank" style="color:#0f0;">'+CONFIG.website.replace('https://', '')+'</a>';
    return h;
  },

  projects: function() {
    var h = '';
    var mainProjects = CONFIG.projects.filter(function(p) { return p.folders.indexOf('all') !== -1; });
    mainProjects.forEach(function(p, i) {
      h += '<span class="highlight">[' + (i+1) + '] ' + p.label + '</span>\n';
      h += '      <a href="' + p.url + '" target="_blank" style="color:#0f0;">' + p.url.replace('https://', '') + '</a>\n\n';
    });
    h += '  Type <span class="highlight">open 1</span>, <span class="highlight">open 2</span>, etc. to visit.';
    return h;
  },

  education: function() {
    var h = '';
    CONFIG.education.forEach(function(edu) {
      h += '<span class="highlight">' + edu.date + '</span>  ' + edu.title + '\n';
      if (edu.subtitle) h += '            ' + edu.subtitle + '\n';
      h += '\n';
    });
    h += '<span class="highlight">Certifications:</span>\n';
    CONFIG.certifications.forEach(function(c) {
      h += '  - ' + c.name + ' (' + c.year + ')\n';
    });
    return h.trim();
  },

  interests: function() {
    return CONFIG.interests.map(function(i) {
      return '<span class="highlight">' + i.name + '</span> - ' + i.desc;
    }).join('\n');
  },

  neofetch: function() {
    return '<span class="highlight">       ______</span>          ' + CONFIG.name.split(' ')[0].toLowerCase() + '@makowski-pc\n' +
      '<span class="highlight">      / ____ \\</span>         -------------------\n' +
      '<span class="highlight">     | |    | |</span>        <span class="highlight">OS:</span> Makowski OS v1.0\n' +
      '<span class="highlight">     | |    | |</span>        <span class="highlight">Host:</span> Portfolio Website\n' +
      '<span class="highlight">     | |____| |</span>        <span class="highlight">Uptime:</span> since 1999\n' +
      '<span class="highlight">     |  ____  |</span>        <span class="highlight">Shell:</span> cmd.exe\n' +
      '<span class="highlight">     | |    | |</span>        <span class="highlight">Resolution:</span> 800x600\n' +
      '<span class="highlight">     |_|    |_|</span>        <span class="highlight">CPU:</span> Pentium 133MHz\n' +
      '                        <span class="highlight">Memory:</span> 32MB / 32MB';
  },

  cls: function() {
    terminalOutput.innerHTML = '';
    return null;
  },

  exit: function() {
    closeWindow('terminal-window');
    return null;
  },
};

terminalInput.addEventListener('keydown', function(e) {
  if (e.key !== 'Enter') return;

  var raw = terminalInput.value.trim();
  var cmd = raw.toLowerCase();
  terminalInput.value = '';

  terminalOutput.innerHTML += '<span class="prompt">C:\\Bartosz&gt; </span><span class="cmd">' + raw + '</span>\n';

  if (cmd.startsWith('open ')) {
    var n = parseInt(cmd.split(' ')[1]) - 1;
    var mainProjects = CONFIG.projects.filter(function(p) { return p.folders.indexOf('all') !== -1; });
    if (n >= 0 && n < mainProjects.length) {
      window.open(mainProjects[n].url, '_blank');
      terminalOutput.innerHTML += '<span class="output">Opening ' + mainProjects[n].label + '...</span>\n\n';
    } else {
      terminalOutput.innerHTML += '<span class="error">Unknown project number.</span>\n\n';
    }
  } else if (commands[cmd]) {
    var result = commands[cmd]();
    if (result !== null) {
      terminalOutput.innerHTML += '<span class="output">' + result + '</span>\n\n';
    }
  } else if (cmd !== '') {
    terminalOutput.innerHTML += '<span class="error">\'' + raw + '\' is not recognized as an internal or external command.</span>\n\n';
  }

  terminalOutput.scrollTop = terminalOutput.scrollHeight;
});

document.querySelector('#terminal-window .terminal-body').addEventListener('click', function() {
  document.getElementById('terminal-input').focus();
});

function animateSkillBars() {
  document.querySelectorAll('.skill-bar-inner[data-width]').forEach(function(bar) {
    bar.style.width = bar.dataset.width + '%';
  });
}
