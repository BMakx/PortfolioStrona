function buildPage() {
  var bootLines = document.getElementById('boot-lines');
  bootLines.innerHTML = CONFIG.bootLines.map(function(line) {
    return '<span class="' + line.css + '">' + line.text + '</span>';
  }).join('');

  var bootAscii = document.getElementById('boot-ascii');
  var asciiText = bootAscii.textContent.replace(/\r/g, '').replace(/\n\s*$/, '');
  bootAscii.innerHTML = asciiText.split('\n').map(function(line) {
    return '<span>' + line + '</span>';
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
  buildMyComputer();
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

function skillCategories() {
  var cats = [];
  CONFIG.skills.forEach(function(s) {
    if (s.category !== 'hidden' && cats.indexOf(s.category) === -1) cats.push(s.category);
  });
  return cats;
}

var DRIVE_COLORS = ['#0a7a34', '#00007c', '#7b5b00'];

function fileIcon(ext, color) {
  return '<svg viewBox="0 0 40 48" width="40" height="48">' +
    '<polygon points="4,2 28,2 36,10 36,46 4,46" fill="#fff" stroke="#000" stroke-width="2"/>' +
    '<polygon points="28,2 36,10 28,10" fill="#c0c0c0" stroke="#000" stroke-width="2"/>' +
    '<line x1="9" y1="16" x2="31" y2="16" stroke="#c0c0c0" stroke-width="2"/>' +
    '<line x1="9" y1="21" x2="31" y2="21" stroke="#c0c0c0" stroke-width="2"/>' +
    '<rect x="1" y="27" width="32" height="13" fill="' + color + '"/>' +
    '<text x="17" y="37" text-anchor="middle" font-family="Tahoma, Arial, sans-serif" font-size="9" font-weight="bold" fill="#fff">.' + ext + '</text>' +
    '</svg>';
}

var DRIVE_SVG = '<svg viewBox="0 0 48 32" width="48" height="32">' +
  '<rect x="2" y="8" width="44" height="18" fill="#c0c0c0" stroke="#000" stroke-width="2"/>' +
  '<rect x="4" y="10" width="40" height="3" fill="#fff"/>' +
  '<rect x="8" y="18" width="20" height="3" fill="#808080"/>' +
  '<rect x="36" y="18" width="5" height="3" fill="#0c0"/></svg>';

function buildMyComputer() {
  var cats = skillCategories();
  document.getElementById('drive-row').innerHTML = cats.map(function(cat, i) {
    var letter = String.fromCharCode(67 + i);
    return '<div class="drive" data-cat="' + cat + '" onclick="showDrive(\'' + cat + '\')">' +
      DRIVE_SVG + '<span>' + cat + ' (' + letter + ':)</span></div>';
  }).join('');
  showDrive(cats[0]);
}

function showDrive(cat) {
  var color = DRIVE_COLORS[skillCategories().indexOf(cat) % DRIVE_COLORS.length];
  var items = CONFIG.skills.filter(function(s) { return s.category === cat; });
  document.getElementById('skills-content').innerHTML = items.map(function(s) {
    return '<div class="file-item" onclick="selectFile(this, \'' + s.type + '\')">' +
      fileIcon(s.ext, color) + '<span>' + s.name + '</span></div>';
  }).join('');
  document.querySelectorAll('.drive').forEach(function(d) {
    d.classList.toggle('selected', d.dataset.cat === cat);
  });
  document.getElementById('skills-status').textContent = items.length + ' object(s)';
}

function selectFile(el, type) {
  document.querySelectorAll('.file-item.selected').forEach(function(i) { i.classList.remove('selected'); });
  el.classList.add('selected');
  document.getElementById('skills-status').textContent = 'Type: ' + type;
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
  var asciiLines    = document.querySelectorAll('#boot-ascii span');

  var lineIndex = 0;
  var asciiIndex = 0;
  function showNextLine() {
    if (lineIndex < lines.length || asciiIndex < asciiLines.length) {
      if (lineIndex < lines.length) {
        lines[lineIndex].classList.add('visible');
        lineIndex++;
      }

      var targetAsciiCount = Math.ceil((lineIndex / lines.length) * asciiLines.length);
      while (asciiIndex < targetAsciiCount && asciiIndex < asciiLines.length) {
        asciiLines[asciiIndex].classList.add('visible');
        asciiIndex++;
      }

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
    return '<div class="explorer-item" title="' + (p.desc || '') + '"' +
      ' onclick="selectProject(this,\'' + p.url + '\',\'' + (p.desc || p.label).replace(/'/g, "\\'") + '\')"' +
      ' ondblclick="window.open(\'' + p.url + '\',\'_blank\')">' +
      '<span class="exp-icon">' + p.icon + '</span>' +
      '<span class="exp-label">' + p.label + '</span></div>';
  }).join('');

  document.getElementById('explorer-status').textContent = items.length + ' object(s)';

  document.querySelectorAll('.explorer-sidebar .tree-item').forEach(function(t) {
    t.classList.remove('active-tree');
  });
  if (!clickedEl) clickedEl = document.querySelector('.explorer-sidebar .tree-item');
  if (clickedEl) clickedEl.classList.add('active-tree');
}

var isTouch = window.matchMedia('(pointer: coarse)').matches;

function selectProject(el, url, desc) {
  if (isTouch) { window.open(url, '_blank'); return; }
  document.querySelectorAll('.explorer-item.selected').forEach(function(i) { i.classList.remove('selected'); });
  el.classList.add('selected');
  document.getElementById('explorer-status').textContent = desc;
}

if (isTouch) {
  document.querySelectorAll('.desktop-icon').forEach(function(icon) {
    icon.addEventListener('click', function() { icon.ondblclick(); });
  });
}

var terminalOutput = document.getElementById('terminal-output');
var terminalInput  = document.getElementById('terminal-input');

var commands = {
  help: function() {
    return 'Available commands:\n' +
      '  <span class="highlight">help</span>      - Show this message\n' +
      '  <span class="highlight">whoami</span>    - About me\n' +
      '  <span class="highlight">experience</span>- Work experience\n' +
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
    var cats = [];
    CONFIG.skills.forEach(function(s) {
      if (s.category !== 'hidden' && cats.indexOf(s.category) === -1) cats.push(s.category);
    });
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

  experience: function() {
    return CONFIG.experience.map(function(job) {
      return '<span class="highlight">' + job.date + '</span>  ' + job.title;
    }).join('\n');
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
      '<span class="highlight">     | |    | |</span>        <span class="highlight">OS:</span> Makowski OS v2.0\n' +
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
