using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using plorence_kr.ViewModels;
using System.Text;
using Microsoft.AspNetCore.Authorization;

namespace plorence_kr.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            NotepadViewModel notepadViewModel = new NotepadViewModel();
            notepadViewModel.Title = Defines.TXT_FILENAME;
            System.Net.WebClient client = new System.Net.WebClient();
            notepadViewModel.Content = client.DownloadString(Defines.TXT_CONTENT_URL);
            return View(notepadViewModel);
        }
        public IActionResult Download()
        {
            return NotepadDownload();
        }

        public FileStreamResult NotepadDownload()
        {
            var contentType = "APPLICATION/octet-stream";
            System.Net.WebClient client = new System.Net.WebClient();
            string content = client.DownloadString(Defines.TXT_CONTENT_URL);
            var memory = new MemoryStream(Encoding.UTF8.GetBytes(content));
            memory.Position = 0;
            return File(memory, contentType, Defines.TXT_FILENAME);
        }
    }
}
